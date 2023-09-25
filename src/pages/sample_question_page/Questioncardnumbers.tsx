import {useState} from 'react';
import Question1 from './question_bank/q1';
import Question2 from './question_bank/q2';
import { css } from '@emotion/react'

const page_style = css`
  :root {
    display: flex;
    width: 100%
  }
    .grid_container {
     display: grid;
     grid-template-columns: repeat(5, 1fr);
     grid-row-gap: 20px; }

      .button_style {
        color: #1F262C;
        display: grid;
        padding: 20px;
        background-color: #EEF0F2;
        border-radius: 5px;
        border: none;
      }
`

export default function Questioncardnumbers() {

  return (
    <section css={page_style}>
      <div>
        <h4>Review cards • </h4>
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
        </div>
      </div>
    </section>
  );
}

{/*

export default function Questioncardnumbers() {

  return (
    <section css={page_style}>
      <div>
        <h4>Review cards • </h4>
        <div className="grid_container">
            <button className="button_style" onClick={handleClick}>1</button>{isShown && <Question1 />}
            <button className="button_style" onClick={handleClick}>2</button>{isShown && <Question2 />}
            <button className="button_style" onClick={handleClick}>3</button>{isShown && <Question1 />} 
            <button className="button_style" onClick={handleClick}>4</button>{isShown && <Question1 />} 
            <button className="button_style" onClick={handleClick}>5</button>{isShown && <Question1 />}
            <button className="button_style" onClick={handleClick}>6</button>{isShown && <Question1 />}
            <button className="button_style" onClick={handleClick}>7</button>{isShown && <Question1 />}
            <button className="button_style" onClick={handleClick}>8</button>{isShown && <Question1 />} 
            <button className="button_style" onClick={handleClick}>9</button>{isShown && <Question1 />} 
            <button className="button_style" onClick={handleClick}>10</button>{isShown && <Question1 />}
            <button className="button_style" onClick={handleClick}>11</button>{isShown && <Question1 />}
        </div>
      </div>
    </section>
  );
}

*/}