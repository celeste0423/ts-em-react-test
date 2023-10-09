import React, { useState } from "react";
import { css } from "@emotion/react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  onPressCard: (index: number) => void;
};

const reviewCardStyle = css`
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
  }
  .grid_container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 18px;
    grid-column-gap: 9px;
  }

  .button_style {
    color: #1f262c;
    display: inline-block;
    padding: 10px;
    background-color: #eef0f2;
    border-radius: 5px;
    border: none;
    height: 52px;
    width: 52px;
    text-align: center;
    font-weight: bold;
  }
  .button_style:focus {
    background-color: #d3eaf8;
    border-radius: 5px;
    border: 1.5px solid #387fcf;
  }
`;

type reviewCardType = {
  setQuizIndex: (index: number) => void;
  toggleReviewCard: boolean;
  setToggleReviewCard: (bool: boolean) => void;
};

const ReviewCards: React.FC<reviewCardType> = ({
  setQuizIndex,
  toggleReviewCard,
  setToggleReviewCard,
}) => {
  const buttons = Array.from({ length: 5 }, (_, index) => (
    <button
      key={index}
      onClick={() => setQuizIndex(index)}
      className="button_style"
    >
      {index + 1}
    </button>
  ));

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

        <h4>Review cards • /19</h4>
        <div className="grid_container">{buttons}</div>
      </div>
    </section>
  );
};

export default ReviewCards;
