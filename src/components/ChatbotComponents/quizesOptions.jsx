import React from "react";

import "./css/options.css";

const QuizesOptions = (props) => {
  const options = [
    { text: "Attempted Quize but score not available", handler: props.actionProvider.handleQuizesFirstOptions, id: 1 },
    { text: "Issues in attempting quize", handler: props.actionProvider.handleQuizesSecondOptions, id: 2 },
    { text: "Quize questions/answers incorrect", handler: props.actionProvider.handleQuizesThirdOptions, id: 3 },
    { text: "Other", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default QuizesOptions;