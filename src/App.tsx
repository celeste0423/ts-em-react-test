import React from "react";
import HomePage from "./pages/Home.page";
import { Global, css } from "@emotion/react";
import Navbar from "./components/Navbar";
import Router from "./Router";
import QuizPage from "./pages/Quiz.page";

const globalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;700&family=Poppins:wght@300;400;500;600;700&display=swap");

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Cabin", sans-serif;
  }

  :root {
    --primaryColor: #256af4;
    --secondaryColor: #729ffa;
    --backgroundLightGreyColor: #f9fafc;
    --whiteColor: #ffffff;
    --blackColor: #000000;
    --blackCardBackgroundColor: #19191980;
  }

  html {
    scroll-behavior: smooth;
  }

  h1 {
    font-size: 45px;
  }

  a {
    text-decoration: none;
    color: var(--blackColor);
  }

  li {
    list-style: none;
  }

  .section {
    padding: 4rem 0 2rem;
  }

  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .icon {
    font-size: 2rem;
    cursor: pointer;
  }

  .flex {
    display: flex;
    align-items: center;
  }

  .grid {
    display: grid;
    align-items: center;
  }

  .btn {
    padding: 0.6rem 1.5rem;
    color: var(--whiteColor);
    background: var(--primaryColor);
    border-radius: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background: var(--secondaryColor);
    }
  }

  img {
    width: 100%;
    height: auto;
  }

  body {
    background: var(--backgroundLightGreyColor);
  }
`;

function App() {
  return (
    <div className="App">
   {/*   <Global styles={globalStyle} /> 
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
