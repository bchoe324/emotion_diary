import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/getEmotionImage";

const CalendarDay = ({ month, day, pivotDate, data }) => {
  const nav = useNavigate();

  return (
    <div className="date_cell">
      <span>
        {String(format(pivotDate, "MM")) === String(month) ? day : null}
      </span>
      <span className="emotion_wrapper">
        {data.map((item) => {
          return String(format(item.date, "MM/d")) ===
            String(`${month}/${day}`) ? (
            <img
              onClick={() => nav(`/diary/${item.id}`)}
              src={getEmotionImage(item.emotionId)}
              key={item.id}
            />
          ) : null;
        })}
      </span>
    </div>
  );
};

export default CalendarDay;
