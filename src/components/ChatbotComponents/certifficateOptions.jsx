import React from "react";

import "./css/options.css";

const CertificatesOptions = (props) => {
  const options = [
    { text: "Course completed but certificate not generated", handler: props.actionProvider.handleCertificatesFirstOptions, id: 1 },
    { text: "Unable to download Certificate", handler: props.actionProvider.handleCertificatesSecondOptions, id: 2 },
    { text: "Certificate has wrong details/request a change in details", handler: props.actionProvider.handleCertificatesThirdOptions, id: 3 },
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

export default CertificatesOptions;