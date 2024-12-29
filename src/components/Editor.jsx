import { useState, useEffect } from "react";
import { format } from "date-fns";
import Button from "./Button";
import Modal from "./Modal";
import "./Editor.css";
import { getEmotionImage } from "../util/getEmotionImage";

const emotionList = [
  {
    id: 1,
    imageSrc: getEmotionImage(1),
  },
  {
    id: 2,
    imageSrc: getEmotionImage(2),
  },
  {
    id: 3,
    imageSrc: getEmotionImage(3),
  },
  {
    id: 4,
    imageSrc: getEmotionImage(4),
  },
  {
    id: 5,
    imageSrc: getEmotionImage(5),
  },
  {
    id: 6,
    imageSrc: getEmotionImage(6),
  },
  {
    id: 7,
    imageSrc: getEmotionImage(7),
  },
  {
    id: 8,
    imageSrc: getEmotionImage(8),
  },
  {
    id: 9,
    imageSrc: getEmotionImage(9),
  },
  {
    id: 10,
    imageSrc: getEmotionImage(10),
  },
  {
    id: 11,
    imageSrc: getEmotionImage(11),
  },
  {
    id: 12,
    imageSrc: getEmotionImage(12),
  },
  {
    id: 13,
    imageSrc: getEmotionImage(13),
  },
  {
    id: 14,
    imageSrc: getEmotionImage(14),
  },
  {
    id: 15,
    imageSrc: getEmotionImage(15),
  },
  {
    id: 16,
    imageSrc: getEmotionImage(16),
  },
];

const Editor = ({ onSubmit, defaultData }) => {
  const [diary, setDiary] = useState({
    date: new Date().getTime(),
    emotionId: 0,
    content: "",
  });
  useEffect(() => {
    if (defaultData) setDiary(defaultData);
  }, [defaultData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "date") value = new Date(value).getTime();

    setDiary({
      ...diary,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(diary);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const onOpenModal = () => setModalOpen(true);
  const onCloseModal = () => setModalOpen(false);

  return (
    <div className="editor">
      <section className="date_section">
        <h2>오늘의 날짜</h2>
        <div>
          <input
            type="date"
            name="date"
            value={format(diary.date, "yyyy-MM-dd")}
            onChange={onChangeInput}
          />
        </div>
      </section>
      <section className="emotion_section">
        <h2>오늘의 감정</h2>
        <div onClick={onOpenModal}>
          <img src={getEmotionImage(diary.emotionId)} />
        </div>
      </section>
      <section className="content_section">
        <h2>오늘의 일기</h2>
        <textarea
          name="content"
          placeholder="오늘 하루를 기록해 보세요"
          value={diary.content}
          onChange={onChangeInput}
        />
      </section>
      <div className="button_section">
        <Button
          text={"저장하기"}
          type={"positive"}
          onClick={onClickSubmitButton}
        />
      </div>

      {/* 모달 */}
      {modalOpen === true ? (
        <Modal isOpen={modalOpen} onClose={onCloseModal}>
          <div className="text_wrapper">
            <h3>감정 선택</h3>
            <div>어떤 하루였나요?</div>
          </div>
          <div className="emotion_wrapper">
            {emotionList.map((emotion) => {
              return (
                <div key={emotion.id}>
                  <img
                    src={emotion.imageSrc}
                    onClick={() => {
                      onChangeInput({
                        target: { name: "emotionId", value: emotion.id },
                      });
                      onCloseModal();
                    }}
                  />
                </div>
              );
            })}
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default Editor;
