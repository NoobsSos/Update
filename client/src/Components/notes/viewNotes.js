import "../../Styles/notes/notes.css";
import Nav from "../main/Nav"
import Footer from "../main/Footer";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconMenu from "../../img/icon-menu.png";
import '../../Styles/notes/notes.css';
import iconBlackBell from "../../img/black-bell-notes.png";
import iconWhiteBell from "../../img/white-bell.png";
import iconFocusedNote from "../../img/focused-notes.png";
import { useSelector } from "react-redux";
import GetNotes from "./GetNotes";


const ViewNotes = () => {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.status)
  const note = useSelector((state) => state.note);
  const userId = user._id;
  const picturePath = user.picturePath

  return (
    <div className="page">
      <Nav></Nav>
      <div className="page-wrapper">
        <div className="menu-section">
          <div className="menu-content">
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
              <img class="static-icon" src={iconFocusedNote} alt="icon note"></img>
            </div>
            <div className="icon-wrapper">
            <Link to="#">
              <div className="chat"></div>
              </Link>

            </div>
          </div>
        </div>
        <div className="right-section-wrapper">
          <div className="upper-section">

              <h1 className="title-notes">
                Нотатки
              </h1>

            <Link to="/create-notes">
              <button className="create-note">
                Створити нотатку
              </button>
            </Link>


          </div>
          <div className="notes-section">
            <div className="notes-wrapper">
              <GetNotes />
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default ViewNotes;






