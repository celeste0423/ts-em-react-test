import React from "react";
import { css } from "@emotion/react";

import brainDesktopImage from "../assets/brain-desktop.svg";

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
    margin: 1rem;

    .imageDiv {
      img {
        height: 600px;
      }
    }
    .textDiv {
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
      margin: 1rem;

      .imageDiv {
        img {
          height: 600px;
        }
      }

      .textDiv {
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
    border: 1px solid var(--greyColor) !important;
  }
`;

function HomePage() {
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
            <button className="btn">Get started</button>
            <button className="btn subButton">Try now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
