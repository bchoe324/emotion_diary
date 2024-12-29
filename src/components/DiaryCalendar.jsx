import { useContext } from "react";
import { DateStateContext } from "../pages/Home";
import getCalendarDays from "../util/getCalendarDays.js";
import CalendarDay from "./CalendarDay";
import "./DiaryCalendar.css";

const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

const DiaryCalendar = ({ data }) => {
  const pivotDate = useContext(DateStateContext);
  const daysInMonth = getCalendarDays(pivotDate);

  return (
    <div className="diary_calendar">
      <div className="calendar_wrapper">
        <div className="days_wrapper">
          {dayOfWeek.map((day) => {
            return (
              <div className={`day_cell`} key={day}>
                <span>{day}</span>
              </div>
            );
          })}
        </div>
        <div className="dates_wrapper">
          {daysInMonth.map((date) => {
            return (
              <CalendarDay
                key={date.date}
                date={date.date}
                month={date.month}
                day={date.day}
                pivotDate={pivotDate}
                data={data}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DiaryCalendar;
