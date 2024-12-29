import { format } from "date-fns";
import "./Viewer.css";
import { getEmotionImage } from "../util/getEmotionImage";

const Viewer = ({ emotionID, content, date }) => {
  return (
    <div className="viewer">
      <div>
        <h3>{format(date, "yyyy-MM-dd")}</h3>
        <div className="emotion_wrapper">
          <img src={getEmotionImage(emotionID)} />
        </div>
      </div>
      <div className="content_wrapper">{content}</div>
    </div>
  );
};

export default Viewer;
