import React from "react";

import "./css/options.css";

const ProfileOptions = (props) => {
  const options = [
    { text: "Profile Details Issue/Change", handler: props.actionProvider.handleProfilesFirstOptions, id: 1 },
    { text: "Course enrolled but not displayed in Ongoing", handler: props.actionProvider.handleProfilesSecondOptions, id: 2 },
    { text: "Course completed but still in Ongoing", handler: props.actionProvider.handleProfilesThirdOptions, id: 3 },
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

export default ProfileOptions;