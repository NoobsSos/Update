import Header from '../main/Nav';
import "../../Styles/sign-in/sign-in.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../state/index.js';
import { Link } from 'react-router-dom';

const initialValues = {
  email: "",
  password: ""
}

const SignInPage = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, updateFormData] = useState(initialValues);

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

    const resp = await axios.get(`https://noobssossss.onrender.com/blog`)
    .then(function(response) {
      console.log(response);
    })

    const studentResponse = await axios.post('https://noobssossss.onrender.com/student/login', formData, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function (response) {
      console.log(response);
      console.log(formData);
      const loggedIn = response;
      if (loggedIn)
      {
        dispatch(
          setLogin({
            status: "student",
            user: loggedIn.data.user,
            token: loggedIn.data.token,
          })
        );
        navigate(`/profile-student/${loggedIn.data.user._id}`)
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    const userResponse = await axios.post('https://noobssossss.onrender.com/mentor/login', formData, {
      headers: { "Content-Type": "application/json" }
    })
    .then(function (response) {
      console.log(response);
      console.log(formData);
      const loggedIn = response;
      if (loggedIn)
      {
        dispatch(
          setLogin({
            status: "mentor",
            user: loggedIn.data.user,
            token: loggedIn.data.token,
          })
        );
        navigate(`/profile-mentor/${loggedIn.data.user._id}`)
      }
    })
    .catch(function (error) {
      console.log(error);
    });


  };

  const handlerFormSubmit = async (e) => {
    await handleSubmit(e);
  }

  return (
    <div className='form-sign-in'>
      <div class="wrapper_sign-in">
        <Header></Header>
        <div class="titles">
          <h2>Вхід в особистий кабінет</h2>
          <h3>Введіть ваші дані</h3>
        </div>
        <form action="#" className="form">
          <div className="label-input">
            <label for="email" className="label">
              Електронна адреса
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              autocomplete="off"
              className="input-sign-in"
              placeholder="fake@gmail.com"
              required
            />
          </div>
          <div className="label-input">
            <label for="password" className="label">
              Пароль
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="input-sign-in"
              placeholder="Пароль"
              minlength="6"
              maxlength="25"
              required
            />
          </div>

          <div className="buttons1">
              <button onClick={handlerFormSubmit} type="submit" className="log-in">Увійти</button>
          </div>
          <div className="bottom-elem">
            <div className="text">Ще не маєте акаунта?
            </div>
            <div>
              <Link to="/registration">
                <button className="button-reg">Зареєструватись</button>
              </Link>
            </div>
          </div>


        </form>
      </div>
    </div>
  );
}

export default SignInPage;
