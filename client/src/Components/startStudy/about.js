import Nav from "../main/Nav";
import Form from 'react-bootstrap/Form';
import "../../Styles/startStudy/startStudy.css";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";

const initialValues = {
  mentor: "",
  student: "",
  sphere: "",
  duration: "",
  timesPerWeek: "",
  location: "",
  alone: ""
}

const AboutStudy = () => {
  const [formData, updateFormData] = useState(initialValues);
  const { mentorId } = useParams();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const userId = user._id;
  const status = useSelector((state) => state.status)

  formData.mentor = mentorId;
  formData.student = userId;

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);

    const newStudent = await axios.put(`https://noobssossss.onrender.com/mentor`, formData)
    .then(function (response) {
      console.log(response)
    })

    const userResponse = await axios.post('https://noobssossss.onrender.com/lesson', formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);

    if (status == "student")
    {
      navigate(`/profile-student/${userId}`)
    }

    if (status == "mentor")
    {
      navigate(`/profile-mentor/${userId}`)
    }
  }

  return (
    <div className="page-start-study">
      <Nav></Nav>
      <div className="page-start-study-wrapper">
        <div className="page-start-study-content">
          <div className="upper-text-section">
            <h1 className="start-study-title">Заявка репетитору ПІБ</h1>
            <div className="start-study-under-title-text">
            Ång Cecilia Lindqvist vägg-tv. Ner antropopol. Jorade bifaktig Märta Lindqvist. Malongar gödogt. Omni-channel renovräkning fast.
            </div>
          </div>
          <div className="input-wrapper-start-study">

          <div className="for-subtitles-over-inputs">
            <label className="over-input-texts">
              Предмет
            </label>
            </div>
            <Form.Select onChange={handleChange} id='choose-sphere' name='sphere' className='input-start-study-style' aria-label="Default select example">
                  <option selected disabled>Оберіть сферу</option>
                  <option value="Дизайн UX/UI">Дизайн UX/UI</option>
                  <option value="Бізнес та менеджмент">Бізнес та менеджмент</option>
                  <option value="Лідерство та комунікація">Лідерство та комунікація</option>
                  <option value="Право">Право</option>
                  <option value="Дикція та ораторське мистецтво">Дикція та ораторське мистецтво</option>
                  <option value="Фінансова грамотність">Фінансова грамотність</option>
                  <option value="Плавання">Плавання</option>
                  <option value="Стрільба">Стрільба</option>
                  <option value="Психологія">Психологія</option>
                  <option value="SMM">SMM</option>
                </Form.Select>
                <div className="for-subtitles-over-inputs">
            <label className="over-input-texts">
              Тривалість уроку
            </label>
            </div>
            <Form.Select onChange={handleChange} id='lesson-duration' name='duration' className='input-start-study-style' aria-label="Default select example">
                  <option selected disabled>Тривалість одного заняття</option>
                  <option value="40">40 хвилин</option>
                  <option value="60">1 година</option>
                  <option value="90">1,5 години</option>
                  <option value="120">2 години</option>
                  <option value="150">2,5 години</option>
                  <option value="180">3 години</option>
                </Form.Select>
                <div className="for-subtitles-over-inputs">
            <label className="over-input-texts">
              Періодичність
            </label>
            </div>
            <Form.Select onChange={handleChange} id='lesson-frequency' name='timesPerWeek' className='input-start-study-style' aria-label="Default select example">
                  <option selected disabled>кількість занять в тиждень</option>
                  <option value="1">1 заняття</option>
                  <option value="2">2 заняття</option>
                  <option value="3">3 заняття</option>
                  <option value="4">4 заняття</option>
                  <option value="5">5 занять</option>
                  <option value="6">6 занять</option>
                  <option value="7">7 занять</option>
                </Form.Select>
          </div>
          <div className="radio-buttons-wrapper">
          <div className="for-subtitles-over-inputs">
            <label className="over-input-texts">
              Місце занять
            </label>
            </div>
            <div className="radio-buttons-wrapper">

         <div className="upper-buttons">
         <div className="radio-button">
         <label className="option" >У викладача</label>
            <input onClick={handleChange} name="location" className="radio-option1" type="radio" value="offline" required/>
         </div>


         <div className="radio-button">
         <label className="option">Онлайн</label>
            <input onClick={handleChange} name="location" className="radio-option1" type="radio" value="online" required/>
         </div>

         </div>
              </div>

              <label className="over-input-texts">
              Формат занять
            </label>
              <div className="radio-buttons-wrapper">

      <div className="upper-buttons">
      <div className="radio-button">
            <label className="option">Індивідуальні</label>
            <input onClick={handleChange} name="alone" className="radio-option1" type="radio" value="individual" required/>
         </div>

         <div className="radio-button">
         <label className="option" >Групові</label>
            <input onClick={handleChange} name="alone" className="radio-option1" type="radio" value="group" required/>
         </div>
      </div>
           </div>
            </div>

            <div className="button-section-wrapper">
              <button onClick={handleSubmit} className="send-button" type="sumbit">Надіслати</button>
            </div>
          </div>
        </div>
      </div>


   );
}

export default AboutStudy;
