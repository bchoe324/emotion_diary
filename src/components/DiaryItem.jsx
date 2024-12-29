import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/getEmotionImage.js";
import Button from "./Button";
import "../components/DiaryItem.css";

const DiaryItem = ({ id, emotionId, date, content }) => {
  const nav = useNavigate();
  return (
    <div className="diary_item">
      <div className="image_wrapper" onClick={() => nav(`diary/${id}`)}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_wrapper" onClick={() => nav(`diary/${id}`)}>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>
      <div className="button_wrapper">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
