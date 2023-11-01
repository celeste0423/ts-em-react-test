import { css } from "@emotion/react";
import React, { useState } from "react";

import logoImage from "../assets/logo-small.svg";
import TextInput from "../components/TextInput";

const loginPageStyle = css`
  :root {
    --primaryColor: #256af4;
    --secondaryColor: #729ffa;
    --backgroundLightGreyColor: #f9fafc;
    --whiteColor: #ffffff;
    --blackColor: #000000;
    --greyColor: #454545;
    --blackCardBackgroundColor: #19191980;
    --backgroundGreyColor: rgb(213, 214, 216);
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--backgroundLightGreyColor);
    justify-content: center;
    align-items: center;

    .loginDiv {
      background-color: var(--whiteColor);
      width: 820px;
      height: 440px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
      padding: 60px 50px 60px 50px;

      .loginGrid {
        .loginHeader {
          padding-right: 20px;

          .logoDiv {
            padding-top: 1rem;
            padding-bottom: 1rem;
            img {
              width: 40px;
            }
          }
          .loginTitle {
            padding-bottom: 1rem;
          }
          .subtitle {
            font-weight: 400;
          }
        }

        .content {
          width: 100%;
        }
      }
    }
  }
`;

interface ShowErrorObject {
  type: string;
  message: string;
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string | "">("");
  const [password, setPassword] = useState<string | "">("");
  const [error, setError] = useState<ShowErrorObject | null>(null);

  const showError = (type: string) => {
    if (error && Object.entries(error).length > 0 && error?.type == type) {
      return error.message;
    }
    return "";
  };

  const validate = () => {
    setError(null);
    let isError = false;
    //이메일 검사용 정규 표현식
    const reg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    if (!email) {
      setError({ type: "email", message: "A Email is required" });
      isError = true;
    } else if (!password) {
      setError({ type: "password", message: "A Password is required" });
      isError = true;
    }
    return isError;
  };

  return (
    <section css={loginPageStyle}>
      <div className="background flex">
        <div className="loginDiv">
          <div className="loginGrid flex">
            <div className="loginHeader">
              <div className="logoDiv">
                <img src={logoImage} alt="" />
              </div>
              <h1 className="loginTitle">Log in</h1>
              <h2 className="subtitle">Start learning with Quesmed</h2>
            </div>

            <div className="content">
              <TextInput
                string={email}
                inputType="email"
                placeholder="Email"
                onUpdate={(content) => {
                  setEmail(content);
                  validate();
                }}
                errorMessage={showError("email")}
              />
              <TextInput
                string={password}
                inputType="password"
                placeholder="Password"
                onUpdate={(content) => {
                  setPassword(content);
                  validate();
                }}
                errorMessage={showError("password")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
