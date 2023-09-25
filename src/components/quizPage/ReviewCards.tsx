import React from "react";
import { css } from "@emotion/react";

const revieoCardStyle = css`
  :root {
    --primaryColor: #256af4;
    --secondaryColor: #729ffa;
    --backgroundLightGreyColor: #f9fafc;
    --whiteColor: #ffffff;
    --blackColor: #000000;
    --greyColor: #454545;
    --blackCardBackgroundColor: #19191980;
  }

  background-color: pink;
  height: 100vb;

  .content {
  }
`;

const ReviewCards: React.FC = () => {
  return (
    <section css={revieoCardStyle}>
      <div className="content">this is reviewCards</div>
    </section>
  );
};

export default ReviewCards;
