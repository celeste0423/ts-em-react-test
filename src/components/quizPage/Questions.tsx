import React, { useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import AnswerCard from "./AnswerCard";

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
      .title {
        font-weight: 400;
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
  const [radioIndex, setRadioIndex] = useState<number | null>(null);

  const [checkAnswer, setCheckAnswer] = useState<boolean>(false);

  return (
    <section css={questionsStyle}>
      <div className="content">
        <div className="titleDiv">
          <h3 className="title">Sample Clinical Questions</h3>
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