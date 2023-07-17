import '../../Styles/main/section-5.css';
import photo from '../../img/section-5.png';
import Accordion from 'react-bootstrap/Accordion';

const SectionFive = () => {
  return ( 
    <div className='section-5'>
        <h2 className="title-section-5">Often - asked questions:</h2>
        <div className='content-section-5'>
        <Accordion className="my-accordion" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Як знайти необхідний курс/матеріал для вивчення?</Accordion.Header>
        <Accordion.Body>
          Використовуйте пошукові системи та нашу освітню платформу для знаходження необхідного курсу або матеріалу для вивчення.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Які є можливості взаємодії з іншими користувачами?</Accordion.Header>
        <Accordion.Body>
          В будь-який момент ви можете написати ментору який вас зацікавив, або віповісти учню який написав вам. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Чи є можливість отримати сертифікат про успішне закінчення курсу?</Accordion.Header>
        <Accordion.Body>
            Наша платформа не передбачає курсів, а лише уроків з менторами, тому ви не зможете отримати сертифікат від нас, проте ментор може вам його видати особисто
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Як можна змінити свій профіль на сайті, включаючи пароль та електронну адресу?</Accordion.Header>
        <Accordion.Body>
          У вашому профілі є можливіть його редагування, саме там ви можете все це зробити
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Як можна дізнатися про нові курси або матеріали, які додані на сайт?</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Як можна звернутися до підтримки користувачів, якщо виникли проблеми з сайтом?</Accordion.Header>
        <Accordion.Body>
          Внизу вебсайту є форма з допомогою якої можна з нами зв'язатися.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          <div >
            <img className='image-section-5'src={photo} alt="" />
          </div>
        </div>
      </div>
   );
}
 
export default SectionFive;