import React, { useState } from "react";
import { css } from "@emotion/react";

import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

const answerCardStyle = css`
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

  .card {
    border-radius: 0.3rem;
    border: 1px solid lightgray;
    padding: 1rem 0.5rem 1rem 0.5rem;
    margin: 1rem 0 1rem;

    .radioBtn {
      margin-right: 1rem;
      height: 20px;
      width: 20px;
    }
  }

  .cardCorrect {
    border-radius: 0.3rem;
    border: 1px solid lightgray;
    padding: 1rem 0.5rem 1rem 0.5rem;
    margin: 1rem 0 1rem;
    background-color: rgba(74, 217, 188, 0.15);

    .answerHeaderDiv {
      .radioBtn {
        margin-right: 1rem;
      }
    }
  }

  .cardWrong {
    border-radius: 0.3rem;
    border: 1px solid lightgray;
    padding: 1rem 0.5rem 1rem 0.5rem;
    margin: 1rem 0 1rem;
    background-color: rgba(255, 92, 92, 0.15);

    .answerHeaderDiv {
      .radioBtn {
        margin-right: 1rem;
      }
    }
  }

  .line {
    border-bottom: 1px solid lightgray;
    margin: 1rem 3rem 1rem 3rem;
  }
  .descriptionDiv {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

type Props = {
  key: number;
  radioBtnCheck: boolean;
  fontSize: number;
  answerString: string;
  descriptionString: string;
  answerCheck: boolean | null;
};

const AnswerCard: React.FC<Props> = ({
  radioBtnCheck,
  fontSize,
  answerString,
  descriptionString,
  answerCheck,
}) => {
  const fontSizeStyle = {
    fontSize: `${16 + fontSize}px`,
  };

  return (
    <section style={fontSizeStyle} css={answerCardStyle}>
      {answerCheck === null ? (
        <div className="card flex">
          <input
            type="radio"
            checked={radioBtnCheck}
            className="radioBtn"
            readOnly
          />
          <div className="answer">{answerString}</div>
        </div>
      ) : answerCheck ? (
        <div className="cardCorrect">
          <div className="answerHeaderDiv flex">
            <AiFillCheckCircle color="#4ad9bc" size="25" className="radioBtn" />
            <p className="answer">{answerString}</p>
          </div>

          <div className="line" />

          <div className="descriptionDiv">
            <p className="description">{descriptionString}</p>
          </div>
        </div>
      ) : (
        <div className="cardWrong">
          <div className="answerHeaderDiv flex">
            <AiFillCloseCircle color="#ff5c5c" size="25" className="radioBtn" />
            <p className="answer">{answerString}</p>
          </div>

          <div className="line" />

          <div className="descriptionDiv">
            <p className="description">{descriptionString}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AnswerCard;
