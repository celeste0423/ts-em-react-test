import React from "react";
import { css } from "@emotion/react";
import logoImage from "../../assets/logo.svg";
import smallLogoImage from "../../assets/logo-small.svg";
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
  height: 100vb;
  width: 275px;

  .content {
    background: var(--greyColor);
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
  }

  .logo-title {
    height: 35px;
    margin-bottom: 3em;
  }
  .logo-small {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
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
    display: inline-flex;
    align-self: center;
    height: 1.5em;
    width: 1.5em;
    margin-right: 1em;
    top: 0.425em;
    position: relative;
  }

  .nav-menu h1 {
    vertical-align: middle;
    display: inline-block;
    allign-items: center;
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
    font-weight: light;
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

  @media screen and (max-width: 1125px) {
    width: 75px;
    box-shadow: 1px 1px 5px gray;

    .nav-menu h1,
    .subscribe-menu,
    .toggle-border,
    .logo-title {
      display: none;
    }

    .logo-small {
      display: block;
      margin-bottom: 3em;
    }

    .separating-line {
      width: 30px;
    }

    .subscribe-background {
      width: 75px;
    }
  }
`;

const options = ["QBank", "OSCE"];

const QuizNavbar: React.FC = () => {
  return (
    <section css={quizNavbarStyle}>
      <nav>
        <ul>
          <div>
            <li>
              <img src={logoImage} className="logo-title" />
            </li>
            <li>
              <img src={smallLogoImage} className="logo-small" />
            </li>
          </div>

          <div className="toggle-border">
            <RadioToggle options={options} defaultOption="QBank" />
          </div>

          <div className="nav-menu">
            <li>
              <img src={liveTutorial} />
              <a href="products.html">
                <h1>Live tutorials</h1>
              </a>
            </li>
            <div className="separating-line"></div>
            <li>
              <a href="pricing.html">
                <img src={question} />
                <h1>Anatomy Questions</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={question} />
                <h1>Cardiology Questions</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={question} />
                <h1>Emergency Questions</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={question} />
                <h1>Neurology Questions</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={question} />
                <h1>Paediatric Questions</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={question} />
                <h1>Physiology Questions</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={question} />
                <h1>Clinical Questions</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={question} />
                <h1>Pre-Clinical Questions</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={quesCard} />
                <h1>Clinical Quescards</h1>
              </a>
            </li>
            <li>
              <a href="pricing.html">
                <img src={quesCard} />
                <h1>Pre-Clinical Quescards</h1>
              </a>
            </li>
            <div className="separating-line"></div>
          </div>

          <div className="subscribe-menu">
            <li>
              <img src={subscribe} className="subscribe-icon" />
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
              <img src={subscribeBackground} className="subscribe-background" />
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
};

export default QuizNavbar;