import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const nav = useNavigate();
  const params = useParams();
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const currentDiary = useDiary(params.id);

  const onSubmit = (diary) => {
    onUpdate(diary.id, diary.date, diary.emotionId, diary.content);
    nav("/", { replace: true });
  };

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        centerChild={<h2>일기 수정</h2>}
        rightChild={
          <Button text={"삭제하기"} type={"negative"} onClick={onClickDelete} />
        }
      />
      <Editor onSubmit={onSubmit} defaultData={currentDiary} />
    </div>
  );
};

export default Edit;
