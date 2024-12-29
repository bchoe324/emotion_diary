import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";

const useDiary = (id) => {
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);
  const [currentDiary, setCurrentDiary] = useState();

  useEffect(() => {
    const currentDiary = data.find((diary) => String(id) === String(diary.id));

    if (!currentDiary) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurrentDiary(currentDiary);
  }, [id]);

  return currentDiary;
};

export default useDiary;
