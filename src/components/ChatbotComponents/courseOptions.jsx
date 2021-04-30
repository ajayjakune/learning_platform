import React from "react";

import "./css/options.css";

const CourseOptions = (props) => {
  const options = [
    { text: "Resources", handler: props.actionProvider.handleResourcesOptions, id: 1 },
    { text: "Quizes", handler: props.actionProvider.handleQuizesOptions, id: 2 },
    { text: "Certificate", handler: props.actionProvider.handleCertificatesOptions, id: 3 },
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

export default CourseOptions;