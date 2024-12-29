import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const currentDiary = useDiary(params.id);

  return (
    <>
      {!currentDiary ? (
        <div>로딩중...</div>
      ) : (
        <div>
          <Header
            leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
            centerChild={<h2>일기 보기</h2>}
            rightChild={
              <Button
                text={"수정하기"}
                onClick={() => nav(`/edit/${params.id}`)}
              />
            }
          />
          <Viewer
            date={currentDiary.date}
            emotionID={currentDiary.emotionId}
            content={currentDiary.content}
          />
        </div>
      )}
    </>
  );
};

export default Diary;
