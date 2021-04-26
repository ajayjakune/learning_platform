import React from "react";

import "./css/options.css";

const LoginOptions = (props) => {
  const options = [
    { text: "Unable to Login", handler: props.actionProvider.handleLoginsFirstOptions, id: 1 },
    { text: "No Screen on Login", handler: props.actionProvider.handleLoginsSecondOptions, id: 2 },
    { text: "Other", handler: () => {}, id: 3 },
    { text: "Complaints/Suggestions", handler: props.actionProvider.handleComplaintsSuggestionsOptions, id: 4 },
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

export default LoginOptions;