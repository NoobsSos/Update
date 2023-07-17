import Nav from "../../Components/main/Nav";
import "../../Styles/reminder/reminder.css";
import reminderIcon from "../../img/Нагадування (3).png";
import chatIcon from "../../img/Чат (1).png";
import notesIcon from "../../img/Нотатки (1).png";
import person from "../../img/person.png"

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useSelector } from "react-redux";
import iconMenu from "../../img/icon-menu.png";

const initialValues = {
  recieverId: "",
  theme: "",
  text: "",
  timeEnd: ""
}



const CreateReminder = () => {

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

  formData.recieverId = userId;

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData);

    const mentorResponse = await axios.post('https://noobssossss.onrender.com/notification/mentor', formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);

    const studentResponse = await axios.post('https://noobssossss.onrender.com/notification/student', formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);

    navigate('/view-reminders')
  };



  return (
    <div className="reminder-bg">
      <div className="nav">
      <Nav></Nav>
      </div>
<div className="createReminder-wrapper">

       <div className="left-side">
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
        <Link to="/view-reminders"><img src={reminderIcon}></img></Link>
        <Link to="/view-notes"><img src={notesIcon}></img></Link>
        <img src={chatIcon}></img>
      </div>

      <div className="right-side">
        <div className="top-title">
          <h1>Нагадування</h1>
        </div>
        <div className="bottom-content">
          <div className="content-create">
            <div className="inform">
              <h2>Сповістити мене:</h2>
              <input onChange={handleChange} name="timeEnd" type="date" id="date"></input>
            </div>
            <div className="theme">
            <h2>Тема:</h2>
              <input onChange={handleChange} name="theme" type="text" id="theme"></input>
            </div>
            <div className="details">
              <h2>
              Деталі:
              </h2>
              <textarea onChange={handleChange} name="text" id="details" rows={10} cols={10} wrap="soft"></textarea>
            </div>
            <button type="submit" onClick={handleSubmit}>Відправити</button>
          </div>
        </div>
      </div>
    </div>
    </div>

   );
}

export default CreateReminder;
