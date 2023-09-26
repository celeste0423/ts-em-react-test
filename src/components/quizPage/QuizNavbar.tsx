import React from "react";
import { css } from "@emotion/react";

const quizNavbarStyle = css`
  :root {
    --primaryColor: #256af4;
    --secondaryColor: #729ffa;
    --backgroundLightGreyColor: #f9fafc;
    --whiteColor: #ffffff;
    --blackColor: #000000;
    --greyColor: #454545;
    --blackCardBackgroundColor: #19191980;
  }

  background-color: lightblue;
  height: 100vb;

  .content {
    background: var(--greyColor);
  }
`;

const QuizNavbar: React.FC = () => {
  return (
    <section css={quizNavbarStyle}>
      <div className="content">this is Quiz Navbar</div>
    </section>
  );
};

export default QuizNavbar;
