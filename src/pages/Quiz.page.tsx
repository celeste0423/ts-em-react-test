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
  .content {
    position: relative;
    overflow: hidden;

    .contentGrid {
      grid-template-columns: 300px 1fr;
      height: 100%;
    }

    @media screen and (max-width: 1125px) {
      .contentGrid {
        grid-template-columns: 75px 1fr;
      }
      .reviewCardDiv {
        transition: all 0.2s ease-out;
        position: absolute;
        right: -350px;
      }
      .activeReviewCardDiv {
        transition: all 0.2s ease-out;
        position: absolute;
        right: 0px;
      }
    }
  }
`;

const QuizPage: React.FC = () => {
  const [quizIndex, setQuizIndex] = useState<number>(0);

  const [toggleReviewCard, setToggleReviewCard] = useState<boolean>(true);

  return (
    <section css={quizPageStyle}>
      <div className="content flex">
        <div className="contentGrid grid">
          <QuizNavbar />
          <Questions question={quizData[quizIndex]} />
        </div>
        <div
          className={`flex ${
            toggleReviewCard ? "activeReviewCardDiv" : "reviewCardDiv"
          }`}
        >
          <ReviewCards
            quizIndex={quizIndex}
            setQuizIndex={(index: number) => setQuizIndex(index)}
            toggleReviewCard={toggleReviewCard}
            setToggleReviewCard={(bool: boolean) => setToggleReviewCard(bool)}
          />
        </div>
      </div>
    </section>
  );
};

export default QuizPage;
