import {useState} from 'react';

import Questioncardnumbers from './Questioncardnumbers';
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
      grid-template-columns: 1fr 1fr;
      width: 100%; }
`

function Questioncard() {

  //const [isShown, setIsShown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (event:any) => {
    // setIsShown(current => !current);
    setActiveIndex(event.target.id);
  };

  return (
    <section css={page_style}>
      <div className="grid_container">
        <Question1 />
        <Questioncardnumbers />    
      </div>
    </section>
  );
}

export default Questioncard;