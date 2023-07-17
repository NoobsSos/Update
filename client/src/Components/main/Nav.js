import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../img/logo.svg';
import logoMobile from '../../img/logo-mob.png';
import '../../Styles/main/navbar.css';
import HomePage from '../Home';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../../state';

import profilePicHeader from "../../img/profilePicHeader.png"

function App() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isLoggedIn = false;
  let userId, picturePath;
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.status)

  if (user)
  {
    isLoggedIn = true
    userId = user._id
    picturePath = user.picturePath
  }

  return (
    <div className="navbar-menu">
      {['xl'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">
              <Link to="/">
                <picture>
                  <source srcSet={logoMobile} media="(max-width: 420px)" />
                  <source srcSet={logo} media="(min-width: 421px)" />
                  <img src={logo} alt="" />
                </picture>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  HubStudy
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    className='nav-item'
                    title="Обрати напрям"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action1">Лідерство та комунікація</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action2">
                    Дизайн UX/UI
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                    Бізнес та менеджмент
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Право
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Дикція та ораторське мистецтво
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                      Фінансова грамотність
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action7">
                      Плавання
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action8">
                      Стрільба
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action9">
                      Психологія
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action10">
                      SMM
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link to="/blog" >
                    <Nav.Link className='nav-item' href="#action7">Блог</Nav.Link>
                  </Link>

                  {!isLoggedIn && (
                    <>
                      <Link to="/sign-in">
                        <button className='sign-in'>Увійти</button>
                      </Link>
                      <Link to="/registration">
                        <button className='sign-up'>Зареєструватись</button>
                      </Link>
                    </>
                  )}

                 {isLoggedIn && (
                  <>
                      {status == "student" && (
                        <button onClick={() => navigate(`/profile-student/${userId}`)} className='profilePic'>
                          <img className='profilePic-img' width={60} src={`https://noobssossss.onrender.com/assets/${picturePath}`} />
                        </button>
                      )}
                      {status == "mentor" && (
                        <button onClick={() => navigate(`/profile-mentor/${userId}`)} className='profilePic'>
                          <img className='profilePic-img' width={60} src={`https://noobssossss.onrender.com/assets/${picturePath}`} />
                        </button>
                      )}
                    <button className='logout' onClick={() => dispatch(setLogout()) && navigate('/')}>Вийти</button>
                  </>
                 )}
                </Nav>


                <NavDropdown
                  title="Укр"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action1">Eng</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action2">
                    Polish
                  </NavDropdown.Item>
                </NavDropdown>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default App;
