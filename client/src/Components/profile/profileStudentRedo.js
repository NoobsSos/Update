import Nav from "../main/Nav";
import '../../Styles/main/reset.css';
import '../../Styles/main/general.css';
import '../../Styles/profile/profileStudent.css';
import '../../Styles/profile/profileStudentRedo.css'
import photoStudent from "../../img/profileStudent.png";
import iconPencil from "../../img/pencil-icon.png";
import reminderIcon from "../../img/reminder-icon.png";
import reminderIconWithout from "../../img/without-sound.png";
import swimming from "../../img/swimming.png";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useSelector } from "react-redux";


const initialValues = {
  firstName: "",
  lastName: "",
  email: ""
}



const ProfileStudentRedo = () => {
  const [formData, updateFormData] = useState(initialValues);
  const [user, setUser] = useState({});
  const user1 = useSelector((state) => state.user);
  const userId = user1._id;

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const updateResponse = await axios.patch(`https://noobssossss.onrender.com/student/${userId}`, formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);
  };

 const getUser = async () => {
    const studentResponse = await axios.get(`https://noobssossss.onrender.com/student/${userId}`)
    .then(function (response) {
        const data = response.data;
        console.log(data);
        setUser(data);
        console.log(user);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(user);
  }

  useEffect(() => {
    getUser();
  }, [userId]); // eslint-disable-line react-hooks/exhaustive-deps

  const {
    firstName,
    lastName,
    email,
    picturePath
  } = user;

  console.log(userId);

  return (
    <div className="container-profileStudentRedo">
      <Nav></Nav>
      <div className="under-header">
        <div>
          <div className="nameSurname">
            <div>
              <input onChange={handleChange} name="firstName" id="nameStudent-input" placeholder="Студентін" className="nameStudent"></input>
              <img src={iconPencil}></img>
            </div>
            <div>
            <input onChange={handleChange} name="lastName" id="surnameStudent-input" placeholder="Студентін" className="surnameStudent"></input>
            <img src={iconPencil}></img>
            </div>
          </div>
          <div>
            <p>Студент</p>
          </div>
        </div>
        <div>
            <button type="submit" onClick={handleSubmit} className="changeProfile">Зберегти</button>
        </div>

      </div>
      <div class="main-profileStudent">
        <div className="sidebar">
          <div className="photoStudent">
          <img className="photoStudent-photo" width={300} src={`https://noobssossss.onrender.com/assets/${picturePath}`}></img>
          </div>
        </div>
        <div className="mainProfileStudentRedo">
          <div class="sectionOneStudentProfile">
            <div className="functionBlock-redo">
              <div className="function-btn">Функції</div>
              <div className="reminder-loudness">
                <p>Нагадування</p>
                <div>
                  <img width={28} src={reminderIcon}></img>
                  <p>Зі звуком</p>
                </div>
                <div>
                  <img src={reminderIconWithout}></img>
                  <p>Зі звуком</p>
                </div>
              </div>
            </div>
            <div className="contactBlock-redo">
            <div className="function-btn">Контакти</div>
              <div className="reminder-loudness">
                <div>
                <input type="email" onChange={handleChange} name="email" id="emailStudent-input" placeholder="mentorivna1986@gmail.com" className="emailStudent"></input>
                <img src={iconPencil}></img>
                </div>
                <div>
                <input type="email" onChange={handleChange} name="email" id="emailStudent-input" placeholder="mentorivna1986@gmail.com" className="emailStudent"></input>
                <img src={iconPencil}></img>
                </div>
              </div>
            </div>
          </div>
          <div class="sectionTwoStudentProfile">
            <div className="myLessons-student">
                <div className="myLessons-btn">Мої заняття</div>
                <div className="block-lessons-redo">
                  <div className="item-lessons">
                    <div className="photo-lesson">
                      <img src={swimming} ></img>
                    </div>
                    <div className="about-lesson">
                      <div>
                        <h2 className="title-lesson">Підготовка до спортивних змагань:</h2>
                      </div>
                      <div>
                        <p className="description-lesson">Змагання на носі, а ви не знаєте як до них підготуватись?</p>
                      </div>
                      <div className="durationPrice">
                        <div>
                          <p>Ціна заняття:</p>
                          <p>350 грн</p>
                        </div>
                        <div>
                          <p>Тривалість заняття:</p>
                          <p>1,5 год</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-lessons">
                    <div className="photo-lesson">
                      <img src={swimming} ></img>
                    </div>
                    <div className="about-lesson">
                      <div>
                        <h2 className="title-lesson">Підготовка до спортивних змагань:</h2>
                      </div>
                      <div>
                        <p className="description-lesson">Змагання на носі, а ви не знаєте як до них підготуватись?</p>
                      </div>
                      <div className="durationPrice">
                        <div>
                          <p>Ціна заняття:</p>
                          <p>350 грн</p>
                        </div>
                        <div>
                          <p>Тривалість заняття:</p>
                          <p>1,5 год</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mytasks-student">
                <div className="myLessons-btn">Завдання:</div>
                <div className="block-tasks">
                  <div class="item-tasks">
                    <div>
                      <p>Тести:</p>
                      <a href="http://yourtesturl.com">http://yourtesturl.com </a>
                    </div>
                    <div>
                      <p>Відео:</p>
                      <a href="https://youtu.be/6SjBv5AuL8E">https://youtu.be/6SjBv5AuL8E</a>
                    </div>
                    <div>
                      <p>Тести:</p>
                      <a href="http://yourmanualurl.com" >http://yourmanualurl.com </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default ProfileStudentRedo;
