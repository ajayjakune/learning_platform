import React from 'react';
import { Button } from 'react-bootstrap';

const QuizResultComponent = props => {
    return (
        <div>
            { props.res === true
                ? <div className="result-div mt-4">
                    <p className="mt-2">Hooray! You have scored <strong>{props.score}</strong>/{props.quesLength}</p>
                    <span className="quiz-badge pass">&nbsp;Pass&nbsp;</span>
                    <br /><br />
                    <Button href="/chapter/certificate">View Certificate</Button>
                </div>
                : <div>
                    <p className="result-div mt-4">Oops! You have scored <strong>{props.score}</strong>/{props.quesLength}</p>
                    <p style={{ fontSize: "20px" }}>Required grades - <strong>{props.quesLength / 2}</strong>/{props.quesLength}</p>
                    <span className="quiz-badge fail">&nbsp;Fail&nbsp;</span>
                </div>
            }
        </div>
    )
}

export default QuizResultComponent;