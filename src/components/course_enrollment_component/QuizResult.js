import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import Certificate from './Certificate';
import Feedback from './Feedback';

const QuizResultComponent = props => {
    const [certificateShow, setCertificateShow] = useState(false);
    const [feedbackShow, setFeedbackShow] = useState(false);

    function showFeedback() {
        setCertificateShow(false);
        setFeedbackShow(true);
    }
    return (
        <div>
            { props.res === true
                ? <div className="result-div mt-4">
                    <p className="mt-2">Hooray! You have scored <strong>{props.score}</strong>/{props.quesLength}</p>
                    <span className="quiz-badge pass">&nbsp;Pass&nbsp;</span>
                    <br /><br />
                    <div className="certificate-link-div bg-primary" style={{ borderRadius: "20px", width: "10em", marginLeft: "30px" }}>
                        <Nav.Link onClick={() => setCertificateShow(true)} className="text-white" style={{ fontSize: "18px" }}>View Certificate</Nav.Link>
                    </div>
                </div>
                : <div className="result-div mt-4">
                    <p className="mt-2">Oops! You have scored <strong>{props.score}</strong>/{props.quesLength}</p>
                    <p style={{ fontSize: "20px" }}>Required grades - <strong>{props.quesLength / 2}</strong>/{props.quesLength}</p>
                    <span className="quiz-badge fail">&nbsp;Fail&nbsp;</span>
                </div>
            }
            <Certificate
                show={certificateShow}
                onHide={showFeedback}
            />
            <Feedback
                show={feedbackShow}
                onHide={() => setFeedbackShow(false)}
            />
        </div>
    )
}

export default QuizResultComponent;