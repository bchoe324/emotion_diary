import { useState } from "react";
import DiaryItem from "../components/DiaryItem";
import DiaryCalendar from "../components/DiaryCalendar";

import "./DiaryList.css";

const DiaryList = ({ data }) => {
  const [view, setView] = useState("list");

  return (
    <div className="diary_list">
      <div className="toggle_wrapper">
        <span>보기 방식 : </span>
        <div
          className={`toggle_switch ${view}`}
          onClick={() => {
            setView(view === "list" ? "calendar" : "list");
          }}
        ></div>
      </div>
      {view === "list" ? (
        data.map((item) => <DiaryItem key={item.id} {...item} />)
      ) : (
        <DiaryCalendar data={data} />
      )}
    </div>
  );
};

export default DiaryList;
