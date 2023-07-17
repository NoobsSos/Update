import Nav from "../../Components/main/Nav";
import "../../Styles/reminder/reminder.css";
import reminderIcon from "../../img/Нагадування (3).png";
import chatIcon from "../../img/Чат (1).png";
import notesIcon from "../../img/Нотатки (1).png";
import person from "../../img/person.png"
import GetNotifications from "./GetNotifications.js";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import iconMenu from "../../img/icon-menu.png";

const ViewReminder = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.status)
  const userId = user._id
  const picturePath = user.picturePath

  return (
    <div className="reminder-bg">
    <div class="nav">
      <Nav></Nav>
    </div>
    <div className="reminder-wrapper">
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
        <img src={reminderIcon}></img>
        <Link to="/view-notes"><img src={notesIcon}></img></Link>
        <img src={chatIcon}></img>
      </div>
      <div className="right-side">
        <div className="top-title">
          <h1>Нагадування</h1>
          <Link to="/create-reminder"><button>Створити нагадування</button></Link>
        </div>
        <div className="bottom-content">
          <div className="content-block">
            <GetNotifications />
          </div>
        </div>
      </div>
      </div>
    </div>
   );
}

export default ViewReminder;
