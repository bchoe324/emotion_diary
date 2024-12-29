import emotion0 from "./../assets/choose_emotion.svg";
import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";
import emotion6 from "./../assets/emotion6.png";
import emotion7 from "./../assets/emotion7.png";
import emotion8 from "./../assets/emotion8.png";
import emotion9 from "./../assets/emotion9.png";
import emotion10 from "./../assets/emotion10.png";
import emotion11 from "./../assets/emotion11.png";
import emotion12 from "./../assets/emotion12.png";
import emotion13 from "./../assets/emotion13.png";
import emotion14 from "./../assets/emotion14.png";
import emotion15 from "./../assets/emotion15.png";
import emotion16 from "./../assets/emotion16.png";

export function getEmotionImage(emotionId) {
  switch (emotionId) {
    case 0:
      return emotion0;
    case 1:
      return emotion1;
    case 2:
      return emotion2;
    case 3:
      return emotion3;
    case 4:
      return emotion4;
    case 5:
      return emotion5;
    case 6:
      return emotion6;
    case 7:
      return emotion7;
    case 8:
      return emotion8;
    case 9:
      return emotion9;
    case 10:
      return emotion10;
    case 11:
      return emotion11;
    case 12:
      return emotion12;
    case 13:
      return emotion13;
    case 14:
      return emotion14;
    case 15:
      return emotion15;
    case 16:
      return emotion16;
    default:
      return null;
  }
}
