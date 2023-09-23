import React, { useState } from "react";

type Props = {
  onPressCard: (index: number) => void;
};

const TestCards: React.FC<Props> = ({ onPressCard }) => {
  return (
    <div
      style={{
        paddingBottom: 100,
      }}
    >
      <button
        onClick={() => {
          onPressCard(0);
        }}
      >
        {" "}
        0
      </button>
      <button
        onClick={() => {
          onPressCard(1);
        }}
      >
        {" "}
        1
      </button>
      <button
        onClick={() => {
          onPressCard(2);
        }}
      >
        {" "}
        2
      </button>
    </div>
  );
};

export default TestCards;
