import React, { useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import AnswerCard from "./AnswerCard";

import { MdTextFields } from "react-icons/md";

const questionsStyle = css`
  :root {
    --primaryColor: #256af4;
    --secondaryColor: #729ffa;
    --backgroundLightGreyColor: #f9fafc;
    --whiteColor: #ffffff;
    --blackColor: #000000;
    --greyColor: #454545;
    --blackCardBackgroundColor: #19191980;
  }

  height: 100vb;
  padding: 3rem 2rem 2rem 2rem;

  .content {
    .titleDiv {
      margin-bottom: 1rem;
      justify-content: space-between;
      .title {
        font-weight: 400;
      }
      .buttonDiv {
        width: 35px;
        height: 35px;
        border-radius: 3rem;
        padding: 5px 5px;
        &:hover {
          background: lightgray;
          cursor: pointer;
        }
      }

      .textSizePopupDiv {
        .background {
          z-index: 2000;
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.1);
        }
        .textSizePopup {
          position: absolute;
          z-index: 2100;
          right: 0;
          background-color: var(--whiteColor);
          width: 300px;
          height: 50px;
          margin-right: 2rem;
          margin-top: -20px;
          border-radius: 1rem;
          box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
          justify-content: center;
          .slider {
            margin: 0 1rem 0 1rem;
            border: none;
          }
          .slider::-webkit-slider-thumb {
            width: 150px;
            height: 15px;
          }
        }
      }
      .off {
        display: none;
      }
    }

    .questionsDiv {
      background: var(--whiteColor);
      padding: 1rem 2rem 1rem 2rem;
      border-radius: 0.3rem;
      box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.101);

      .questionNumberDiv {
        margin-bottom: 1.5rem;
      }

      .answerDiv {
        margin: 2rem 0 2rem;

        .answerCard {
          cursor: pointer;
        }
      }

      .line {
        border-bottom: 1px solid lightgray;
        margin: 2rem 0 2rem 0;
      }

      .buttonDiv {
        justify-content: end;
        .finishBtn {
          margin-right: 0.5rem;
          color: var(--primaryColor);
          background: var(--whiteColor);
          border: 1px solid var(--primaryColor);
        }
      }
    }
  }
`;

type QuestionCompType = {
  questionNumber: number;
  questionString: string;
  answerIndex: number;
  indexStrings: string[];
  correctDescription: string;
  wrongDescription: string;
};

const Questions: React.FC<QuestionCompType> = ({
  questionNumber,
  questionString,
  answerIndex,
  indexStrings,
  correctDescription,
  wrongDescription,
}) => {
  const [textSizePopup, setTextSizePopup] = useState<boolean>(false);

  const openPop = () => {
    !textSizePopup ? setTextSizePopup(true) : setTextSizePopup(false);
  };

  const [radioIndex, setRadioIndex] = useState<number | null>(null);

  const [checkAnswer, setCheckAnswer] = useState<boolean>(false);

  return (
    <section css={questionsStyle}>
      <div className="content">
        <div className="titleDiv flex">
          <h3 className="title">Sample Clinical Questions</h3>
          <div onClick={() => openPop()} className="buttonDiv">
            <MdTextFields size="25" />
          </div>
          <div className={`textSizePopupDiv ${!textSizePopup ? "off" : "on"}`}>
            <div onClick={() => openPop()} className="background" />
            <div className={`textSizePopup flex `}>
              <small>A</small>
              <input
                type="range"
                min="0"
                max="10"
                step="1"
                className="slider"
              />
              <h2>A</h2>
            </div>
          </div>
        </div>

        <div className="questionsDiv">
          <div className="questionNumberDiv">
            <h3 className="questionNumber">Question {questionNumber}</h3>
          </div>

          <div className="questionDiv">
            <p className="question">{questionString}</p>
          </div>

          <div className="answerDiv">
            {indexStrings.map((indexString, index) => {
              return (
                <div
                  className={!checkAnswer ? "answerCard" : ""}
                  onClick={
                    !checkAnswer
                      ? () => {
                          setRadioIndex(index);
                        }
                      : () => {}
                  }
                >
                  <AnswerCard
                    key={index}
                    radioBtnCheck={radioIndex === index}
                    answerString={indexString}
                    answerCheck={
                      !checkAnswer
                        ? null //정답 확인 전
                        : radioIndex === answerIndex
                        ? index === answerIndex //정답일 경우
                          ? true
                          : null
                        : index === answerIndex //오답일 경우
                        ? true
                        : index === radioIndex
                        ? false
                        : null
                    }
                    descriptionString={
                      index === answerIndex
                        ? correctDescription
                        : index === radioIndex
                        ? wrongDescription
                        : ""
                    }
                  />
                </div>
              );
            })}
          </div>

          <div className="line" />

          <div className="buttonDiv flex">
            <Link to="/">
              <button className="btn finishBtn">Finish Test</button>
            </Link>
            <button
              onClick={() => {
                setCheckAnswer(true);
              }}
              className="btn showAnsBtn"
            >
              Show Answer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
