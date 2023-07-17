import '../../Styles/main/footer.css';
import { useState } from 'react';
import axios from "axios"

import instagram from '../../img/instagram.png';
import facebook from '../../img/facebook.png';
import telegram from '../../img/telegram.png';

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  text: ""
}

const Footer = () => {
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

    const userResponse = await axios.post('https://noobssossss.onrender.com/userquestion', formData)
    .then(function (response) {
      console.log(response);
      console.log(formData);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(formData);
  };

  return (
    <footer className="footer">
      <div className="contact-info">
        <div className="block">
          <h3 className='block-heading'>Про HubStudy:</h3>
            <ul>
              <li><a className='link-page' href="">Про нас</a></li>
              <li><a className='link-page' href="">Відгуки</a></li>
              <li><a className='link-page' href="">Співпраця</a></li>
              <li className='margin-zero'><a className='link-page' href="">Контакти</a></li>
            </ul>
        </div>
        <div className="block">
          <h3 className='block-heading'>Про HubStudy:</h3>
          <ul>
            <li><a className='link-page' href="">Про нас</a></li>
            <li><a className='link-page' href="">Відгуки</a></li>
            <li><a className='link-page' href="">Співпраця</a></li>
          </ul>
        </div>
      </div>
      <div className="content-footer">
        <div className="social-net">
            <h2 className="title-social">Ми в соцмережах: </h2>
          <div className="item-social">
            <div className="image-item">
              <img src={instagram} alt="logo-insta" />
            </div>
            <div className="link">
              <a className='link-social' href="https://msng.link/o/?HubStudy=ig">Instagram</a>
            </div>
          </div>
          <div className="item-social">
            <div className="image-item">
              <img src= {facebook} alt="facebook-logo" />
            </div>
            <div className="link">
              <a className='link-social' href="https://www.facebook.com/HubStudy">Facebook</a>
            </div>
          </div>
          <div className="item-social">
            <div className="image-item">
              <img src= {telegram} alt="telegram-logo"/>
            </div>
            <div className="link">
              <a className='link-social' href="https://msng.link/o/?HubStudy=tg">Telegram</a>
            </div>
          </div>
        </div>
        <form action="#">
          <div className="form">
            <h2 className="title-form">Введіть ваші дані та зв’яжіться з нами:</h2>
            <div className="item">
                  <label for="name">Ім'я</label>
                  <input type="text"  onChange={handleChange} name="firstName" id="name" placeholder="Джон" />
                </div>
                <div className="item">
                  <label for="surname">Прізвище</label>
                  <input type="text"  onChange={handleChange} name="lastName" id="surname" placeholder="Джонсонюк" />
                </div>
                <div className="item">
                  <label for="email">Email</label>
                  <input type="email" onChange={handleChange} name="email" id="email" placeholder="fakeEmail@gmail.com" />
                </div>
                <div className="item">
                <label for="number">Телефон</label>
              <input type="tel" onChange={handleChange} name="phoneNumber" id="number" placeholder="+380 00 00 000 00" />
                </div>
                <div>
                  <label for="comment">Ваш коментар</label>
                  <input type="text" onChange={handleChange} name="text" id="comment" />
                </div>
                <button type="submit" onClick={handleSubmit} className="submit-button">Надіслати</button>
              </div>
        </form>
      </div>
    </footer>
   );
}

export default Footer;
