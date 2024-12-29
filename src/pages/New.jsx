import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);
  const onSubmit = (diary) => {
    onCreate(diary.date, diary.emotionId, diary.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        centerChild={<h2>새 일기 쓰기</h2>}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
