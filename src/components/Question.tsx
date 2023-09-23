import React, { useState } from "react";

type Props = {
  questionNumber: number;
  testQuestion: string;
  options: string[];
  correctAnswerIndex: number;
};

const Question: React.FC<Props> = ({
  questionNumber,
  testQuestion,
  options,
  correctAnswerIndex,
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number | undefined>(undefined);
  return (
    <div
      style={{
        paddingTop: 300,
        paddingBottom: 300,
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
    >
      <h1
        style={{
          fontSize: 60,
        }}
      >
        Test Question {questionNumber}
      </h1>

      <p>{testQuestion}</p>

      <div
        style={{
          height: 100,
          width: "100%",
        }}
      >
        {options.map((option, index) => {
          return (
            <button
              onClick={() => {
                setSelectedIdx(index);
              }}
            >
              <div
                style={{
                  width: "100%",
                  paddingTop: 12,
                  paddingBottom: 12,

                  textAlign: "start",
                  paddingLeft: 20,
                  borderWidth: 1,
                  border: "1px solid #dddddd",
                  marginTop: 20,
                  backgroundColor:
                    index === selectedIdx
                      ? index === correctAnswerIndex
                        ? "gray"
                        : "gray"
                      : "transparent",

                  borderRadius: 16,
                }}
              >
                <p>{option}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
export default Question;
