import React from "react";
import { css } from "@emotion/react";
import QuizNavbar from "../components/quizPage/QuizNavbar";
import Questions from "../components/quizPage/Questions";
import ReviewCards from "../components/quizPage/ReviewCards";

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
  return (
    <section css={quizPageStyle}>
      <div className="contentGrid grid">
        <QuizNavbar />
        <Questions
          questionNumber={1}
          questionString={
            "A 75-year-old man presents to Accident and Emergency following a week of productive cough, fever and shortness of breath. He has not had any foreign travel, however is a chronic smoker with a 15 pack/year history\n\nWhich of the following findings is most likely to be found on examination of this patients chest?"
          }
          answerIndex={4}
          indexStrings={[
            "Reduced vocal resonance and dull percussion note",
            "Hyper-resonant percussion note and tracheal deviation to the left",
            "Stony dull percussion note and reduced tactile vocal fremitus",
            "Increased vocal resonance and fine end inspiratory crepitations",
            "Increased tactile vocal fremitus and dull percussion note",
          ]}
          correctDescription={
            "This is the correct answer. This patient has the classic symptoms of a pneumonia and the abnormality found on auscultation is indicative of a lobar pneumonia. Pneumonia presents with increased tactile vocal fremitus/ vocal resonance and dull percussion note"
          }
          wrongDescription={
            "The reduced vocal resonance is not in keeping with a pneumonia. Reduced vocal resonance is seen in conditions such as lung collapse; pleural effusion and pneumothorax. In a pneumonia the vocal resonance increases as there is better conduction of sound waves through consolidation"
          }
        />
        <ReviewCards />
      </div>
    </section>
  );
};

export default QuizPage;
