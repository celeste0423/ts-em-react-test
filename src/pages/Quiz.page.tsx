import React, { useState } from "react";
import { css } from "@emotion/react";
import QuizNavbar from "../components/quizPage/QuizNavbar";
import Questions from "../components/quizPage/Questions";
import ReviewCards from "../components/quizPage/ReviewCards";
import quizData from "../assets/dataSet";

const quizPageStyle = css`
  :root {
    --primaryColor: #256af4;
    --secondaryColor: #729ffa;
    --backgroundLightGreyColor: #f9fafc;
    --whiteColor: #ffffff;
    --blackColor: #000000;
    --greyColor: #454545;
    --blackCardBackgroundColor: #19191980;
  }

  .contentGrid {
    grid-template-columns: 300px 1fr 350px;
  }

  @media screen and (max-width: 1125px) {
    .contentGrid {
      grid-template-columns: 75px 1fr 0px;
    }
  }
`;

const QuizPage: React.FC = () => {
  const [quizIndex, setQuizIndex] = useState<number>(0);

  return (
    <section css={quizPageStyle}>
      <div className="contentGrid grid">
        <QuizNavbar />
        <Questions question={quizData[quizIndex]} />
        <ReviewCards setQuizIndex={(index: number) => setQuizIndex(index)} />
      </div>
    </section>
  );
};

export default QuizPage;
