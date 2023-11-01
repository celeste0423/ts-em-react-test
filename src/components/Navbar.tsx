import React, { useState } from "react";
import { css } from "@emotion/react";

import logoImage from "../assets/logo.svg";
import logoSmallImage from "../assets/logo-small.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const navbarStyle = css`
  :root {
    --primaryColor: #256af4;
    --secondaryColor: #729ffa;
    --backgroundLightGreyColor: #f9fafc;
    --whiteColor: #ffffff;
    --blackColor: #000000;
    --greyColor: #1a1a1a;
    --blackCardBackgroundColor: #19191980;
  }

  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  z-index: 1000;
  background: var(--whiteColor);

  .header {
    width: 1125px;
    justify-content: space-between;

    .logoDiv {
    }
    .iconDiv {
      display: none;
    }
    .smallLogoDiv {
      display: none;
    }
    .emptyDiv {
      display: none;
    }

    .navBar {
      display: flex;
      width: 100%;
      padding: 0 2rem 0 2rem;
      flex-direction: row;
      justify-content: space-between;
      .navLists {
        width: 40%;
        justify-content: space-between;
        .navItem {
        }
      }
      .buttonDiv {
        button {
          margin-left: 1rem;
          a {
            color: var(--whiteColor);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1125px) {
    .logoDiv {
      display: none;
    }
    .iconDiv {
      display: block !important;
      margin: 1rem;
      .icon {
        font-size: 1rem;
      }
    }
    .smallLogoDiv {
      display: block !important;
    }
    .emptyDiv {
      display: block !important;
    }

    .navBar {
      position: absolute;
      height: max-content;
      width: 100%;
      flex-direction: column;

      .navItem {
        display: none;
      }

      .buttonDiv {
        display: none;
      }
    }

    .activeNavbar {
      margin-top: 9rem;
      .navItem {
        display: block !important;
      }
    }
  }
`;

function Navbar() {
  const [active, setActive] = useState("navBar");
  //Function to toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  //Function to remove navBar
  const closeNav = () => {
    setActive("navBar");
  };

  return (
    <section css={navbarStyle} className="navBarSection flex">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <img src={logoImage} alt="" />
          </a>
        </div>

        <div className="iconDiv ">
          {active == "navBar activeNavbar" ? (
            <AiOutlineClose onClick={closeNav} className="icon closeIcon" />
          ) : (
            <RxHamburgerMenu onClick={showNav} className="icon showIcon" />
          )}
        </div>

        <div className="smallLogoDiv">
          <a href="#" className="logo flex">
            <img src={logoSmallImage} alt="" />
          </a>
        </div>
        <div className="emptyDiv"></div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Products
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Pricing
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Resources
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Community
              </a>
            </li>
          </ul>
          <div className="buttonDiv">
            <a href="/login" className="loginLink">
              Log in
            </a>
            <button className="btn">
              <a href="#">Get started</a>
            </button>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
