import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import GetBlog from "./getBlog.js";

const GetBlogs = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);



  const BlogsGet = async () => {
      try {
      const response = await fetch(`https://noobssossss.onrender.com/blog`, {
          method: 'GET',
      });

      let data = await response.json();
      console.log(data);
      dispatch(setBlogs({ blog: data }));
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(() => {
    BlogsGet()
}, [])


  return (
    <Carousel>
      {blog && blog.map(({ text }, index) => (
        index % 3 === 0 ? (
          <Carousel.Item key={text} interval={20000}>
            <div className="blog-items">
              <GetBlog text={text} name={`${blog[index].mentor.firstName} ${blog[index].mentor.lastName}`} picturePath={blog[index].mentor.picturePath}/>
              {blog[index + 1] && <GetBlog text={blog[index + 1].text} name={`${blog[index + 1].mentor.firstName} ${blog[index + 1].mentor.lastName}`} picturePath={blog[index + 1].mentor.picturePath} />}
              {blog[index + 2] && <GetBlog text={blog[index + 2].text} name={`${blog[index + 2].mentor.firstName} ${blog[index + 2].mentor.lastName}`} picturePath={blog[index + 2].mentor.picturePath}/>}
            </div>
          </Carousel.Item>
        ) : null
      ))}
    </Carousel>
  )
}
export default GetBlogs;
