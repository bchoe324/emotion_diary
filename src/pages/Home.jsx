import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "./../App";
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import add from "../assets/add.svg";

export const DateStateContext = createContext();

const getMonthlyData = (pivotDate, data) => {
  const startDate = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  const endDate = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data
    .filter((item) => item.date >= startDate && item.date <= endDate)
    .sort((a, b) => b.date - a.date);
};

const Home = () => {
  const nav = useNavigate();

  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = getMonthlyData(pivotDate, data);

  const increaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const decreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <DateStateContext.Provider value={pivotDate}>
        <Header
          leftChild={<Button text={"<"} onClick={decreaseMonth} />}
          centerChild={
            <h2>
              {pivotDate.getFullYear()}년 {pivotDate.getMonth() + 1}월
            </h2>
          }
          rightChild={<Button text={">"} onClick={increaseMonth} />}
        />

        <DiaryList data={monthlyData} />

        <Button
          onClick={() => nav(`/new`)}
          text={<img src={add} />}
          type={"floating"}
        />
      </DateStateContext.Provider>
    </div>
  );
};

export default Home;
