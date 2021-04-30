import React from "react";

import "./css/options.css";

const ResourcesOptions = (props) => {
  const options = [
    { text: "Unable to find Resources", handler: props.actionProvider.handleResourcesFirstOptions, id: 1 },
    { text: "Need more Resources", handler: props.actionProvider.handleResourcesSecondOptions, id: 2 },
    { text: "Resources seems incorrect", handler: props.actionProvider.handleResourcesThirdOptions, id: 3 },
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

export default ResourcesOptions;