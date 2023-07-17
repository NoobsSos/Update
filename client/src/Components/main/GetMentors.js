import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMentors } from "../../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import GetMentor from "./getMentor.js";
import '../../Styles/main/getMentors.css';

const GetMentors = () => {
  const dispatch = useDispatch();
  const mentor = useSelector((state) => state.mentor);



  const MentorsGet = async () => {
      try {

      const response = await fetch(`https://noobssossss.onrender.com/mentor?bestMentor=true`, {
          method: 'GET',
      });

      let data = await response.json();
      dispatch(setMentors({ mentor: data }));
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(() => {
      MentorsGet()
  }, [])

  return (
      <Carousel>
          {mentor && mentor.map(
              ({
                  _id,
                  firstName,
                  lastName,
                  description,
                  picturePath
              }) => (
                      <Carousel.Item>
                          <GetMentor mentorId = {_id} 
                                     name={`${firstName} ${lastName}`}
                                     description={description}
                                     picturePath={picturePath}/>
                      </Carousel.Item>
              )
          )}
      </Carousel>
  )
}
export default GetMentors;
