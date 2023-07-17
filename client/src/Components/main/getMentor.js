import { useNavigate } from 'react-router-dom';
import rates from '../../img/Stars_rate.png';
import sectionThree from '../../img/section-3.png';
import { useSelector } from 'react-redux';


const GetMentor = ({mentorId, name, description, picturePath}) => {
  
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const status = useSelector((state) => state.status);

    return (
        <>
          <div className='content-section-3'>
            <div className='titleAndImage'>
              <div className='description-section-3'>
                <h2 className='description-title-section-3'>Programing:</h2>
              </div>
              <div className='image-section-3'>
                <img className='img-mentor-mini' src={`https://noobssossss.onrender.com/assets/${picturePath}`} alt=''></img>
              </div>
            </div>
            <div className='info-about-tutor'>
              <p className='name-tutor'>{name}</p>
              <ul className='theses'>
                <li className='theses-item'>
                {description}
                </li>
              </ul>
              <img src={rates} alt=''></img>
              <div className='buttons-section-3'>
                {(user && status == "mentor") && <button className="startStudying">Почати навчання</button>}
                {(user && status == "student" ) && <button onClick={() => navigate(`/about-study/${mentorId}`)} className="startStudying">Почати навчання</button>}
                {!user && <button onClick={() => navigate(`/sign-in`)} className="startStudying">Увійти</button>}
                <button onClick={() => navigate(`/start-study/${mentorId}`)} className="about">Детальніше</button>
              </div>
            </div>
          </div>

        </>
    )
}

export default GetMentor;
