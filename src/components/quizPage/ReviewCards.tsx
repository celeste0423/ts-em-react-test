import React from "react";
import { css } from "@emotion/react";

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
  height:100vb;

  .content {
    display: grid;
    width: 100%;

    margin-top: 85px;

    background: var(--whiteColor);
    padding: 1rem 2rem 60% 2rem;
    border-radius: 0.3rem;
    box-shadow: -2px 1px 4px rgba(0, 0, 0, 0.101);
  }
  .grid_container {
     display: grid;
     grid-template-columns: repeat(5, 1fr);
     grid-row-gap: 18px; 
     grid-column-gap: 9px;
    }

      .button_style {
        color: #1F262C;
        display: inline-block;
        padding: 10px;
        background-color: #EEF0F2;
        border-radius: 5px;
        border: none;
        height: 52px;
        width: 52px;
        text-align: center;
        font-weight: bold;
      }
      .button_style:focus {
        background-color: #D3EAF8;
        border-radius: 5px;
        border: 1.5px solid #387FCF; 
      }
`;

const ReviewCards: React.FC = () => {

  return (
    <section css={reviewCardStyle}>
      <div className="content">
      <h4>Review cards • /19</h4>
        <div className="grid_container">
            <button className="button_style" >1</button>
            <button className="button_style" >2</button>
            <button className="button_style" >3</button>
            <button className="button_style" >4</button>
            <button className="button_style" >5</button>
            <button className="button_style" >6</button>
            <button className="button_style" >7</button>
            <button className="button_style" >8</button>
            <button className="button_style" >9</button>
            <button className="button_style" >10</button>
            <button className="button_style" >11</button>
            <button className="button_style" >12</button>
            <button className="button_style" >13</button>
            <button className="button_style" >14</button>
            <button className="button_style" >15</button>
            <button className="button_style" >16</button>
            <button className="button_style" >17</button>
            <button className="button_style" >18</button>
            <button className="button_style" >19</button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;
