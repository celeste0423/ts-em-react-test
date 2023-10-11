import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { quizProgressAtom } from "../../store/Atom";
import { useAtom } from "jotai";

type reviewCardType = {
  quizIndex: number;
  setQuizIndex: (index: number) => void;
  toggleReviewCard: boolean;
  setToggleReviewCard: (bool: boolean) => void;
  quizLength: number;
};

const ReviewCards: React.FC<reviewCardType> = ({
  quizIndex,
  setQuizIndex,
  toggleReviewCard,
  setToggleReviewCard,
  quizLength,
}) => {

  const [quizProgress, setQuizProgress] = useAtom(quizProgressAtom);
  const rightCount = quizProgress.filter(([_, isCorrect]) => isCorrect).length;

  const reviewCardStyle = css`
    :root {
      --primaryColor: #256af4;
      --secondaryColor: #729ffa;
      --backgroundLightGreyColor: #f9fafc;
      --whiteColor: #ffffff;
      --blackColor: #000000;
      --greyColor: #454545;
      --blackCardBackgroundColor: #19191980;
      --greenColor: #4ad9bc;
      --lightGreenColor: rgba(74, 217, 188, 0.15);
      --redColor: #ff5c5c;
      --lightRedColor: rgba(255, 92, 92, 0.15);
    }

    height: 100vb;

    .content {
      display: grid;
      overflow: visible;
      position: relative;
      width: 100%;

      margin-top: 85px;

      background: var(--whiteColor);
      padding: 1rem 2rem 60% 2rem;
      border-radius: 0.3rem;
      box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.101);

      .arrow_button {
        position: absolute;
        background: var(--whiteColor);
        box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.101);
        border-radius: 1rem;
        width: 2rem;
        height: 2rem;
        top: 3rem;
        left: -1rem;
        padding-top: 0.4rem;
        padding-left: 0.25rem;
      }
      @media screen and (min-width: 1125px) {
        .arrow_button {
          display: none;
        }
      }

      .progressBar {
        background: #eef0f2;
        margin-top: 1rem;
        margin-bottom: 1rem;
        height: 8px;
        width: 100% - 20px;
        border-radius: 1rem;

        .progressBarRight {
          background: #4ad9bc;
          height: 100%;
          width: ${(100 / quizLength) * rightCount}%;
          border-top-left-radius: 1rem;
          border-bottom-left-radius: 1rem;
          border-top-right-radius: ${rightCount == quizProgress.length
            ? "1rem"
            : null};
          border-bottom-right-radius: ${rightCount == quizProgress.length
            ? "1rem"
            : null};
        }
        .progressBarWrong {
          height: 100%;
          background: #ff5c5c;
          width: ${(100 / quizLength) * (quizProgress.length - rightCount)}%;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
          border-top-left-radius: ${rightCount === 0 ? "1rem" : null};
          border-bottom-left-radius: ${rightCount === 0 ? "1rem" : null};
        }
      }
    }
    .grid_container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-row-gap: 18px;
      grid-column-gap: 9px;
    }

    .indexButton {
      background-color: #eef0f2;
      color: #1f262c;
      display: inline-block;
      padding: 10px;
      border-radius: 5px;
      border: none;
      height: 52px;
      width: 52px;
      text-align: center;
      font-weight: bold;
    }
    .activeIndexButton {
      background-color: #d3eaf8;
      border-radius: 5px;
      border: 1.5px solid #387fcf;
    }
    .rightIndexButton {
      background: rgba(74, 217, 188, 0.4);
      color: #1f262c;
      display: inline-block;
      padding: 10px;
      border-radius: 5px;
      border: none;
      height: 52px;
      width: 52px;
      text-align: center;
      font-weight: bold;
    }
    .wrongIndexButton {
      background: rgba(255, 92, 92, 0.4);
      color: #1f262c;
      display: inline-block;
      padding: 10px;
      border-radius: 5px;
      border: none;
      height: 52px;
      width: 52px;
      text-align: center;
      font-weight: bold;
    }
  `;

  

  const buttons = Array.from({ length: quizLength }, (_, index) => {
    let matchingQuiz = quizProgress.find(
      ([quizNumber, _]) => quizNumber - 1 === index
    );
    let isCorrect: boolean = false;
    if (matchingQuiz) {
      // console.log(matchingQuiz[1]);
      isCorrect = matchingQuiz[1];
    }
    return (
      <button
        key={index}
        onClick={() => {
          setQuizIndex(index);
          // console.log(quizProgress);
        }}
        className={` ${
          quizIndex === index
            ? "activeIndexButton"
            : !matchingQuiz
            ? "indexButton"
            : isCorrect
            ? "rightIndexButton"
            : "wrongIndexButton"
        }`}
      >
        {index + 1}
      </button>
    );
  });

  return (
    <section css={reviewCardStyle}>
      <div className="content">
        <div
          className="arrow_button"
          onClick={
            toggleReviewCard
              ? () => setToggleReviewCard(false)
              : () => setToggleReviewCard(true)
          }
        >
          {!toggleReviewCard ? (
            <IoIosArrowBack size="20" />
          ) : (
            <IoIosArrowForward size="20" />
          )}
        </div>

        <h4 className="quizNumber">
          Review cards •{quizIndex + 1}/{quizLength}
        </h4>

        <div className="progressBar flex">
          <div className="progressBarRight" />
          <div className="progressBarWrong" />
        </div>

        <div className="grid_container">{buttons}</div>
      </div>
    </section>
  );
};

export default ReviewCards;

function readAtom(
  quizProgressAtom: import("jotai").PrimitiveAtom<[number, boolean][]> & {
    init: [number, boolean][];
  }
): [any, any] {
  throw new Error("Function not implemented.");
}

