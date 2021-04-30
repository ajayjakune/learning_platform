import React from "react";

import "./css/options.css";

const MainOptions = (props) => {
  const options = [
    { text: "Courses", handler: props.actionProvider.handleCourseOptions, id: 1 },
    { text: "Profile", handler: props.actionProvider.handleProfileOptions, id: 2 },
    { text: "Login", handler: props.actionProvider.handleLoginOptions, id: 3 },
    { text: "Other", handler: () => {}, id: 4 },
    { text: "Complaints/Suggestions", handler: props.actionProvider.handleComplaintsSuggestionsOptions, id: 5 },
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

export default MainOptions;