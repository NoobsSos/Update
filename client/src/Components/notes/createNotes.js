import "../../Styles/notes/notes.css";
import Nav from "../main/Nav"
import Footer from "../main/Footer";
import iconMenu from "../../img/icon-menu.png";
import '../../Styles/notes/notes.css';
import iconBlackBell from "../../img/black-bell-notes.png";
import iconWhiteBell from "../../img/white-bell.png";
import iconNoteBlack from "../../img/black-note-create.png";
import iconNoteWhite from "../../img/white-note-create.png";
import axios from "axios";

import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialValues = {
  userId: "",
  title: "",
  text: "",
}

const CreateNotes = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.status)
  const userId = user._id;
  const picturePath = user.picturePath
  const [formData, updateFormData] = useState(initialValues);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  formData.userId = userId;

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);

    const mentorResponse = await axios.post('https://noobssossss.onrender.com/note/mentor', formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);

    const studentResponse = await axios.post('https://noobssossss.onrender.com/note/student', formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);

    navigate("/view-notes")
  };

  return (
    <div className="page-create">
    <Nav></Nav>
    <div className="create-note-page">


  <div className="menu-section-create">
          <div className="menu-create">
            <div className="avatar">
            {status == "student" && (
              <button className="button-avatar" onClick={() => navigate(`/profile-student/${userId}`)}>
               <img className="avatar-icon" width={300} src={`https://noobssossss.onrender.com/assets/${picturePath}`} ></img>
             </button>
             )}

             {status == "mentor" && (
              <button className="button-avatar" onClick={() => navigate(`/profile-mentor/${userId}`)}>
                <img className="avatar-icon" width={300} src={`https://noobssossss.onrender.com/assets/${picturePath}`} ></img>
             </button>
             )}
            </div>
            <div className="icon-wrapper">
              <Link to="/view-reminders">
              <div className="bell"></div>
              </Link>
            </div>
            <div className="icon-wrapper">
              <Link to="/view-notes">
                <div className="note"></div>
                </Link>
            </div>
            <div className="icon-wrapper">
            <Link to="#">
              <div className="chat"></div>
              </Link>

            </div>
          </div>
  </div>
  <div className="create-note-section">
    <div className="section-for-content">
      <div className="title-section">
        <h1 className="title-notes-create">
                  Нотатки
                </h1>
      </div>
      <div className="note-section-with-title">
      <div className="under-title-section">
        <h2 className="secondary-title">
          Нова нотатка
        </h2>
      </div>
      <div className="actual-note-section">
        <div className="theme-section">
          <div className="theme-title">
          <strong className="subtitle">
                Тема:</strong>
          </div>
          <div className="input-section">
            <input type="text" name="title" onChange={handleChange} className="input-theme" minlength="1"
          maxlength="40"
            ></input>
          </div>
        </div>


          <div className="details-title-container">
            <div className="details-title">
              <strong className="subtitle">
                Деталі:</strong>
            </div>


          </div>
          <div className="text-holder">
            <input className="actual-text" type="text" onChange={handleChange} name="text" rows="5">
            {/* Сьогодні я виконав домашнє завдання від Менторіни Батьківної. Зробив купу помилок. Тому мені слід переглянути розділ 3, 4 ще раз та пройти тести заново */}
            </input>
          </div>
      </div>
      <div className="buttons-section">
            <button onClick={handleSubmit} className="add-note-button" type="submit" >
              Додати нотатку
            </button>
           <Link to="/view-notes">
            <button className="decline-button" >Скасувати</button>
           </Link>
          </div>
      </div>
    </div>
  </div>


  </div>
    </div>





   );
}

export default CreateNotes;
