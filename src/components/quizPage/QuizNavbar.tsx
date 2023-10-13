import React from "react";
import { css } from "@emotion/react";
import logoImage from "../../assets/logo.svg";
import RadioToggle from "./RadioToggle";

import liveTutorial from "../../assets/quizNavbar/livetutorial.svg";
import quesCard from "../../assets/quizNavbar/quescard.svg";
import question from "../../assets/quizNavbar/question.svg";
import subscribe from "../../assets/quizNavbar/subscribe.svg";
import subscribeBackground from "../../assets/quizNavbar/subscribe-background.svg";

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

  background-color: white;
  height: 100vh;
  width: 275px;
  transition: all 0.2s ease-out;
  box-shadow: 1px 1px 3px rgb(230, 230, 230);
  z-index: 2;
  text-overflow: clip;
  white-space: nowrap;

  .content {
    background: var(--greyColor);
  }

  .logo-title {
    height: 30px;
    margin-bottom: 3em;
    object-position: left;
    margin-left: -5px;
    object-fit: none;
    margin-top: 2rem;
  }

  .radio-button {
    display: inline-block;
    padding: 5px 15px;
    border: none;
    cursor: pointer;
    margin: 3px 0px 3px;
    border-radius: 3px;
    transition: background-color 0.3s, color 0.3s;
  }

  .radio-button.active {
    background-color: rgb(211, 234, 248);
    color: black;
  }

  .toggle-border {
    height: 40px;
    width: 160px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px gray;
    border-radius: 3px;
    margin-bottom: 1em;
    margin-left: 1em;
  }

  nav {
    display: flex;
    justify-content: start;
    margin-left: 2em;
  }

  .separating-line {
    height: 2px;
    width: 200px;
    background-color: rgb(185, 185, 185);
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .nav-menu li {
    margin-bottom: 10px;
  }

  .nav-menu img {
    height: 1.5em;
    width: 1.5em;
    margin-right: 1em;
    top: 0.425em;
    position: relative;
  }

  .nav-menu h1 {
    vertical-align: middle;
    display: inline-block;
    font-size: 15px;
  }

  .subscribe-menu {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    position: relative;
    z-index: 3;
  }

  .subscribe-menu h1 {
    font-size: 15px;
    margin-bottom: 5px;
  }

  .subscribe-menu h2 {
    font-size: 12px;
    font-weight: lighter;
    color: rgb(100, 100, 100);
    margin-bottom: 20px;
  }

  .subscribe-icon {
    height: 100%;
    width: auto;
  }

  .sign-up-btn {
    color: white;
    background-color: rgb(56, 127, 207);
    border-radius: 5px;
    border-color: transparent;
    height: 35px;
    width: 110px;
    cursor: pointer;
  }

  .subscribe-background {
    width: 275px;
    position: fixed;
    left: 0;
    bottom: 0;
  }

  .separating-line,
  .subscribe-background {
    transition: all 0.2s ease-out;
  }
  .nav-menu h1,
  .subscribe-menu,
  .toggle-border {
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 1125px) {
    width: 75px;
    transition: all 0.2s ease-out;
    box-shadow: 1px 1px 3px rgb(230, 230, 230);
    overflow: hidden;
    text-overflow: clip;
    white-space: nowrap;
    margin-left: -10px;

    .logo-title {
      object-fit: none;
      width: 40px;
    }

    .nav-menu h1,
    .subscribe-menu,
    .toggle-border {
      visibility: hidden;
    }

    .separating-line {
      width: 30px;
    }

    .subscribe-background {
      width: 65px;
    }

    .separating-line,
    .subscribe-background {
      transition: all 0.2s ease-out;
    }

    :hover {
      width: 275px;
      margin-left: 0px;
      transition: all 0.2s ease-out;

      .logo-title {
        width: 100%;
      }

      .nav-menu h1,
      .logo-title,
      .subscribe-menu,
      .toggle-border {
        visibility: visible;
      }

      .separating-line {
        width: 200px;
      }

      .subscribe-background {
        width: 275px;
      }

      .separating-line,
      .subscribe-background {
        transition: all 0.2s ease-out;
      }
    }
  }
`;

const navOptions = [
  { title: 'Anatomy Questions', isQuescard: false, id: 1 },
  { title: 'Cardiology Questions', isQuescard: false, id: 2 },
  { title: 'Emergency Questions', isQuescard: false, id: 3 },
  { title: 'Neurology Questions', isQuescard: false, id: 4 },
  { title: 'Paediatric Questions', isQuescard: false, id: 5 },
  { title: 'Physiology Questions', isQuescard: false, id: 6 },
  { title: 'Clinical Questions', isQuescard: false, id: 7 },
  { title: 'Pre-clinical Questions', isQuescard: false, id: 8 },
  { title: 'Clinical Quescards', isQuescard: true, id: 9 },
  { title: 'Pre-Clinical Quescards', isQuescard: true, id: 10 },
];

const navOptionItems = navOptions.map((option) => (
  <li key={option.id}>
    <a href="pricing.html">
      <img src={option.isQuescard ? quesCard : question} alt={`icon ${option.id}`} />
      <h1>{option.title}</h1>
    </a>
  </li>
));

const options = ["QBank", "OSCE"];

const QuizNavbar: React.FC = () => {
  return (
    <section css={quizNavbarStyle}>
      <nav>
        <ul>
          <div>
            <li>
              <img src={logoImage} className="logo-title" alt="top left logo"/>
            </li>
          </div>

          <div className="toggle-border">
            <RadioToggle options={options} defaultOption="QBank" />
          </div>

          <div className="nav-menu">
            <li>
              <img src={liveTutorial} alt="icon 0"/>
              <a href="products.html">
                <h1>Live tutorials</h1>
              </a>
            </li>
            <div className="separating-line"></div>
            {navOptionItems}
            <div className="separating-line"></div>
          </div>

          <div className="subscribe-menu">
            <li>
              <img src={subscribe} className="subscribe-icon" alt="subscribe hat"/>
            </li>
            <h1>Subscribe today!</h1>
            <h2>
              Excel at medical school
              <br />
              with our next generation
              <br />
              QBank and OSCE platform!
            </h2>
            <button className="sign-up-btn">Sign Up Now</button>
          </div>

          <div>
            <li>
              <img src={subscribeBackground} className="subscribe-background" alt="background for subscribe"/>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default QuizNavbar;