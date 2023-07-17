import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifications } from "../../state/index.js";
import GetNote from "./GetNotification.js";
import '../../Styles/main/getMentors.css';
import GetNotification from "./GetNotification.js";

const GetNotifications = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);
  const user = useSelector((state) => state.user);
  const userId = user._id;
  let show = false;

  const NotificationsGet = async () => {
      try {
      const response = await fetch(`https://noobssossss.onrender.com/notification?recieverId=${userId}`, {
          method: 'GET',
      });

      let data = await response.json();
      dispatch(setNotifications({ notification: data }));
      } catch (err) {
          console.log(err)
      }
  }



  useEffect(() => {
      NotificationsGet()
  }, [])

  if (notification)
    show = true;
  console.log(show)

  if (show)
  return (
          notification.map(
              ({
                  text,
                  theme,
                  timeEnd
              }) => (
                    <GetNotification text={text}
                                     timeEnd={timeEnd}
                                     theme={theme} />
              )
          )
  )
  else
    return (
        <div>Нема</div>
    )
}
export default GetNotifications;
