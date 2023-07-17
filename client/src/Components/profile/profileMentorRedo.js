import Nav from "../main/Nav";
import '../../Styles/main/reset.css';
import '../../Styles/main/general.css';
import '../../Styles/profile/profileStudent.css';
import '../../Styles/profile/profileStudentRedo.css';
import '../../Styles/profile/profileMentorRedo.css';
import studentOne from "../../img/student1.png";
import studentTwo from "../../img/student2.png";
import photoStudent from "../../img/profileStudent.png";
import iconPencil from "../../img/pencil-icon.png";
import reminderIcon from "../../img/reminder-icon.png";
import reminderIconWithout from "../../img/without-sound.png";
import swimming from "../../img/swimming.png";
import comment from "../../img/commment.png";
import stars from "../../img/stars.png";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

// import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { useSelector } from "react-redux";


// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
// import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
// import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';


// import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';
// import MobileDateTimePicker from '@mui/x-date-pickers/MobileDateTimePicker';
// import DesktopDateTimePicker from '@mui/x-date-pickers/DesktopDateTimePicker';
// import StaticDateTimePicker from '@mui/x-date-pickers/StaticDateTimePicker';
// import DateFnsAdapter from '@mui/x-date-pickers/adapter/date-fns';

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';



const ProfileMentorRedo = () => {
  const user = useSelector((state) => state.user);
  const picturePath = user.picturePath

  return (
    <div className="container-profileStudentRedo">
      <Nav></Nav>
      <div className="under-header">
        <div>
          <div className="nameSurname">
            <div>
              <input id="nameStudent-input" placeholder="Менторіна" className="nameStudent"></input>
              <img src={iconPencil}></img>
            </div>
            <div>
            <input id="surnameStudent-input" placeholder="Менторіна" className="surnameStudent"></input>
            <img src={iconPencil}></img>
            </div>
          </div>
          <div>
            <p>Ментор з плавання</p>
          </div>
        </div>
        <div>
            <button type="submit" className="changeProfile">Зберегти</button>
        </div>

      </div>
      <div class="main-profileStudent">
        <div className="sidebar">
          <div className="photoStudent">
          <img class="photo-avatar" src={`https://noobssossss.onrender.com/assets/${picturePath}`} alt="Mentor photo"/>
          </div>
        </div>
        <div className="mainProfileStudentRedo">
          <div className="sectionBio">
            {/* <input className="bio" id="bio" type="text" placeholder="досвідчена тренерка з плавання;
майстер спорту з плавання;
здобула вищу освіту в Національному університеті “Львівська політехніка”;
добра та терпляча до учнів;
sdkjnvsjkdnfkssdkfskd jfhskhf sdhf;
dfkhk fghfhg urtoe ;"></input> */}
            <textarea id="bio" rows={10} cols={10}></textarea>
            <img src={iconPencil}></img>
          </div>
          <div class="sectionOneStudentProfile">
            <div className="functionBlock-redo">
              <div className="function-btn">Функції</div>
              <div className="reminder-loudness">
                <p>Нагадування</p>
                <button id="withSound">
                  <div>
                    <img width={28} src={reminderIcon}></img>
                    <p>Зі звуком</p>
                  </div>
                </button>
                <button id="withoutSound">
                  <div>
                    <img src={reminderIconWithout}></img>
                    <p>Без звуку</p>
                  </div>
                </button>
              </div>
            </div>
            {/* <div className="contactBlock-redo">
            <div className="function-btn">Контакти</div>
              <div className="reminder-loudness">
                <div>
                <input id="emailStudent-input" placeholder="mentorivna1986@gmail.com" className="emailStudent"></input>
                <img src={iconPencil}></img>
                </div>
                <div>
                <input id="emailStudent-input" placeholder="mentorivna1986@gmail.com" className="emailStudent"></input>
                <img src={iconPencil}></img>
                </div>
              </div>
            </div> */}
            <div className="aboutMeMentor">
              <div className="function-btn">Про мене</div>
            <div className="header-sphere about">
              <div>
                <h3 className="title-aboutMe">Напрям:</h3>
                <div className="sphere-input">
                  <label for='selection-form'></label>
                  <Form.Select id='selection-form' name='selection-form' className='selection-form' aria-label="Default select example">
                  <option selected disabled>Оберіть сферу</option>
                  <option value="1">Дизайн UX/UI</option>
                  <option value="2">Бізнес та менеджмент</option>
                  <option value="3">Лідерство та комунікація</option>
                  <option value="4">Право</option>
                  <option value="5">Дикція та ораторське мистецтво</option>
                  <option value="6">Фінансова грамотність</option>
                  <option value="7">Плавання</option>
                  <option value="8">Стрільба</option>
                  <option value="9">Психологія</option>
                  <option value="10">SMM</option>
                </Form.Select>
                </div>
              </div>
              <div>
            <h3 className="title-aboutMe">Місцезнаходження:</h3>
              <input id="location" type="text" placeholder="Моє місцезнаходження"></input>
            </div>
            </div>
            </div>
            <div className="contactBlock-redo">
            <div className="function-btn">Контакти</div>
              <div className="reminder-loudness">
                <div>
                <input id="emailStudent-input" placeholder="mentorivna1986@gmail.com" className="emailStudent"></input>
                <img src={iconPencil}></img>
                </div>
                <div>
                <input id="emailStudent-input" placeholder="mentorivna1986@gmail.com" className="emailStudent"></input>
                <img src={iconPencil}></img>
                </div>
              </div>
            </div>
            {/* <div>
            <h3 className="title-aboutMe">Напрям:</h3>
              <input type="text" placeholder="Моє місцезнаходження"></input>
            </div>
            </div> */}
          </div>
          <div class="sectionTwoStudentProfile">
            <div className="myLessons-student">
                <div className="myLessons-btn">Мої заняття</div>
                <div className="block-lessons">
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
                  <img src={iconPencil}></img>
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
                  <img src={iconPencil}></img>
                </div>
              </div>




    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >
        <DemoItem label="Desktop variant">
          <DesktopDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        <DemoItem label="Mobile variant">
          <MobileDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        <DemoItem label="Responsive variant">
          <DateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
        <DemoItem label="Static variant">
          <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider> */}
<div className='calendar'>
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateTimePicker orientation="landscape" />
    </LocalizationProvider>
    </div>

              <div class="my-students-wrapper">
              <div class="my-students-title-container">
                <div class="my-students-title-shape">
                  <div class="my-students-title-text">
                    Мої учні:
                  </div>
                </div>
              </div>
              <div class="my-students-list-container">
                <div class="block-student">
                    <img class="student-photo"  src={studentOne} alt="Student"/>
                    <ul class="student-text">
                      <li class="student">
                        Учень Учньович
                      </li>
                      <li class="student-email">uchnivskaposhta@gmail.com</li>
                    </ul>
                </div>
                <div class="block-student">
                  <img class="student-photo"  src={studentTwo} alt="Student"/>
                  <ul class="student-text">
                    <li class="student">
                      Учень Учньович
                    </li>
                    <li class="student-email">uchnivskaposhta@gmail.com</li>
                  </ul>
                </div>
                <div class="block-student">
                  <img class="student-photo"  src={studentOne} alt="Student"/>
                  <ul class="student-text">
                    <li class="student">
                      Учень Учньович
                    </li>
                    <li class="student-email">uchnivskaposhta@gmail.com</li>
                  </ul>
                </div>
                <div class="block-student">
                  <img class="student-photo"  src={studentTwo} alt="Student"/>
                  <ul class="student-text">
                    <li class="student">
                      Учень Учньович
                    </li>
                    <li class="student-email">uchnivskaposhta@gmail.com</li>
                  </ul>
                </div>
              </div>
              <div class="more-students-list">
              </div>
            </div>
              <div className="mytasks-student">
                <div className="myLessons-btn">Матеріали:</div>
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

export default ProfileMentorRedo;
