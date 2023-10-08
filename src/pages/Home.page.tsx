import React, { useState } from "react";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import brainDesktopImage from "../assets/brain-desktop.svg";
import Question from "../components/Question";
import TestCards from "../components/TestCards";

const homePageStyle = css`
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
    grid-template-columns: 50% 50%;
    place-items: left;
    padding: 2rem;
    margin: 0 4rem 1rem 4rem;

    .imageDiv {
      order: 2;
      img {
        height: 600px;
      }
    }
    .textDiv {
      order: 1;
      width: 100%;
      height: fit-content;
      align-items: center;
      flex-direction: column;
      .title {
        font-size: 85px;
      }
      .discription {
        padding: 2rem 0 2rem 0;
      }
      .buttonDiv {
        width: 100%;
        align-items: left;
        .btn {
          margin-right: 1rem;
          height: 60px;
          width: 170px;
        }
      }
    }
  }

  @media screen and (max-width: 1125px) {
    .contentGrid {
      grid-template-columns: none;
      place-items: center;
      padding: 2rem;
      margin: 90px 2rem 1rem 2rem;

      .imageDiv {
        order: 1;
        img {
          height: 600px;
        }
      }

      .textDiv {
        order: 1;
        width: 100%;
        align-items: center;
        flex-direction: column;
        .title {
          text-align: center;
        }
        .discription {
          width: 60%;
          text-align: center;
        }
        .buttonDiv {
          width: 100%;
          .btn {
            width: 100%;
            height: 70px;
            margin: 1rem;
          }
        }
      }
    }
  }

  .subButton {
    background: var(--whiteColor);
    color: var(--blackColor);
    border: 1px solid lightgray;
  }
`;

function HomePage() {
  const [selectedQuestionIdx, setSelectedQuestionIdx] = useState(0);
  return (
    <section css={homePageStyle} className="getStarted">
      <div className="contentGrid grid">
        <div className="imageDiv">
          <img src={brainDesktopImage} alt="" />
        </div>

        <div className="textDiv flex">
          <h1 className="title">Learn Medicine the Smart Way</h1>

          <p className="discription">
            Quesmed is a cutting-edge learning platform designed to help you
            excel at your exams and succeed as a doctor
          </p>

          <div className="buttonDiv">
            <Link to="/quiz">
              <button className="btn">Get started</button>
            </Link>
            <button className="btn subButton">Try now</button>
          </div>
        </div>
      </div>

      <Question
        questionNumber={selectedQuestionIdx}
        // testQuestion={`A 75-year-old man presents to Accident and Emergency following a week of productive cough, fever and shortness of breath. He has not had any foreign travel, however is a chronic smoker with a 15 pack/year history.`}
        testQuestion={"This is a sample test question"}
        options={[
          "Reduced vocal resonance and dull percussion note",
          "Hyper-resonant percussion note and tracheal deviation to the left",
          "Increased tactile vocal fremitus and dull percussion note",
          "Increased vocal resonance and fine end inspiratory crepitations",
        ]}
        correctAnswerIndex={0}
      />

      <TestCards onPressCard={(index) => setSelectedQuestionIdx(index)} />
    </section>
  );
}

// const testQuestion = `A 75-year-old man presents to Accident and Emergency following a week of productive cough, fever and shortness of breath. He has not had any foreign travel, however is a chronic smoker with a 15 pack/year history.

// Which of the following findings is most likely to be found on examination of this patient’s chest?`;

// const options = [
// "Reduced vocal resonance and dull percussion note",
// "Hyper-resonant percussion note and tracheal deviation to the left",
// "Increased tactile vocal fremitus and dull percussion note",
// "Increased vocal resonance and fine end inspiratory crepitations",
// ];
// const correctAnswerIndex = 0;

export default HomePage;
