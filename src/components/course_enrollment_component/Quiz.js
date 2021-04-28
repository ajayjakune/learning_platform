import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QuizResultComponent from './QuizResult';

export default function Quiz(props) {
	const var_score = props.score;
	const var_showScore = props.passStatus;
	const var_toggle = props.passStatus;
	const var_result = props.passStatus;

	const questions = props.questions;
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(var_showScore);
	const [score, setScore] = useState(var_score);
	const [toggle, setToggle] = useState(var_toggle);
	const [result, setResult] = useState(var_result);

	const handleAnswerOptionClick = (answer) => {
		if (questions[currentQuestion].correct_answer === answer) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	const checkScoreHandler = () => {
		setToggle(true);
		if (result !== true) {
			if (score >= (questions.length / 2)) {
				setResult(true);
				props.updateScore(score);
				fetch(`http://localhost:5000/${props.courseId}/test`, {
					method: 'put',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${localStorage.getItem('jwt')}`
					},
					body: JSON.stringify({
						isPassed: true,
						score: score,
					}),
				})
					.then((data) => console.log(data))
					.catch((err) => console.log(err));
			}
		}

	};

	function reattemptQuiz() {
		setShowScore(false);
		setCurrentQuestion(0);
		setScore(0);
		setToggle(false);
		setResult(false);
	}

	/*
	  	
		  dataFromResponse[0].questions structure:- Array of questions
			  dataFromResponse[0].questions[0] structure :- object
						  dataFromResponse[0].questions[0].options = array of options :- 4 elements
						  dataFromResponse[0].questions[0].question = question text
						  dataFromResponse[0].questions[0].correct_answer = correct answer
						  dataFromResponse[0].questions[0].course = courseId
		  	
			  dataFromResponse[0].questions[1] structure :- object
						  same as above
	  */
	return (
		<div className="quiz-main text-center">
			<h2>Final Quiz</h2>
			<div className='quiz-card'>
				{showScore ? (
					<div className='score-section'>
						<Button variant="primary" onClick={checkScoreHandler}>Check your score</Button>
						<div>
							{toggle === true
								? <QuizResultComponent res={result} score={score} quesLength={questions.length} courseId={props.courseId} reattemptQuiz={reattemptQuiz} />
								: null
							}
						</div>
					</div>
				) : (
					<>
						<div className='question-section'>
							<div className='question-count'>
								<span>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className='question-text'>{questions[currentQuestion].question}</div>
						</div>
						<div className='answer-section'>
							{questions[currentQuestion].options.map((answerOption, index) => (
								<div key={index}>
									<button className="quiz-button" onClick={() => handleAnswerOptionClick(answerOption)}>{index + 1}. {answerOption}</button><br />
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	);
}
