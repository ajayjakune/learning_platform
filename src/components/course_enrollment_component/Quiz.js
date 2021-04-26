import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QuizResultComponent from './QuizResult';

export default function Quiz(props) {
	const questions = props.questions;
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(props.show_score);
	const [score, setScore] = useState(props.score);
	const [toggle, setToggle] = useState(false);
	const [result, setResult] = useState(false);

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

	const checkScoreHandler = (score) => {
		if (score >= questions.length / 2) {
			setToggle(true);
			setResult(true);
			props.updateScore(score);
		} else {
			setToggle(true);
			setResult(false);
		}

		//course id of course for which test is to be conducted
		const courseId = props.courseId;
		fetch(`http://localhost:5000/${courseId}/test`, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`
			},
			body: JSON.stringify({
				isPassed: result,
				score: score,
			}),
		})
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

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
						<Button variant="primary" onClick={() => checkScoreHandler(score)}>Check your score</Button>
						<div>
							{toggle === true
								? <QuizResultComponent res={result} score={score} quesLength={questions.length} />
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
