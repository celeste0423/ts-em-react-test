import React, { useState } from "react";

interface RadioToggleProps {
  options: string[];
  defaultOption?: string;
}

const RadioToggle: React.FC<RadioToggleProps> = ({
  options,
  defaultOption,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    defaultOption || null
  );

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      {options.map((option) => (
        <label
          key={option}
          className={`radio-button ${
            selectedOption === option ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="toggle"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
            style={{ display: "none" }}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioToggle;
