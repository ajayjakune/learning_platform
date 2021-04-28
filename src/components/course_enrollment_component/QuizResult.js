import React from 'react';
import { Nav, Button, Container } from 'react-bootstrap';

const QuizResultComponent = props => {
    return (
        <Container>
            { props.res === true
                ? <div className="result-div mt-4">
                    <p className="mt-2">Hooray! You have scored <strong>{props.score}</strong></p>
                    <span className="quiz-badge pass">&nbsp;Pass&nbsp;</span>
                    <br /><br />
                    <div className="certificate-link-div bg-primary" style={{ borderRadius: "20px" }}>
                        <Nav.Link href={`/course/${props.courseId}/certificate`} className="text-white" style={{ fontSize: "18px" }}>View Certificate</Nav.Link>
                    </div>
                </div>
                : <div className="result-div mt-4">
                    <p className="mt-2">Oops! You have scored <strong>{props.score}</strong></p>
                    <p style={{ fontSize: "20px" }}>Required grades - <strong>{Math.ceil(props.quesLength / 2)}</strong>/{props.quesLength}</p>
                    <span className="quiz-badge fail">&nbsp;Fail&nbsp;</span><br /><br />
                    <Button className="mt-4 w-50 btn-success" style={{ borderRadius: '20px' }} onClick={props.reattemptQuiz}>Retry</Button>
                </div>
            }
        </Container>
    )
}

export default QuizResultComponent;