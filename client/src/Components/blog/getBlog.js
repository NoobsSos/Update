import rates from '../../img/Stars_rate.png';
import sectionThree from '../../img/section-3.png';
import mentorPhoto from "../../img/mentor-photo.png";

export function TextWithLimit({ text, limit }) {
    return (
      <div>
        {text.length <= limit ? (
          <span>{text}</span>
        ) : (
          <span>
            {text.slice(0, limit)}&hellip;
          </span>
        )}
      </div>
    );
  }

const getBlog = ({text, name, picturePath}) => {
    return (
        <>
          <div class="blog-item-item">
                  <a href="#">
                    <div className="blog-item">
                      <div className="mentor-photo">
                      <img src={`https://noobssossss.onrender.com/assets/${picturePath}`} className="not-mentor-photo-img" alt="mentor-photo"></img>
                      </div>
                      <div className="blog-mentor">
                        <h2 className="blog-mentor-title">{name}</h2>
                        <p className="blog-mentor-description">
                          <TextWithLimit text={text} limit={45} />
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
        </>
    )
}

export default getBlog;
