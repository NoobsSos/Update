import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotes } from "../../state/index.js";
import GetNote from "./GetNote.js";
import '../../Styles/main/getMentors.css';

const GetNotes = () => {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.note);
  const user = useSelector((state) => state.user);
  const userId = user._id;
  let show = false;

  const NotesGet = async () => {
      try {
      const response = await fetch(`https://noobssossss.onrender.com/note?userId=${userId}`, {
          method: 'GET',
      });

      let data = await response.json();
      dispatch(setNotes({ note: data }));
      } catch (err) {
          console.log(err)
      }
  }



  useEffect(() => {
      NotesGet()
  }, [])

  if (note)
    show = true;
  console.log(show)

  if (show)
  return (
          note.map(
              ({
                  text, title
              }) => (
                    <GetNote title={title} text={text} />
              )
          )
  )
  else
    return (
        <div>Нема</div>
    )
}
export default GetNotes;
