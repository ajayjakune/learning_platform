import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QuizResultComponent from './QuizResult';

export default function Quiz() {
  const questions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerId: 'a', answerText: 'New York', isCorrect: false },
        { answerId: 'b', answerText: 'London', isCorrect: false },
        { answerId: 'c', answerText: 'Paris', isCorrect: true },
        { answerId: 'd', answerText: 'Dublin', isCorrect: false },
      ],
    },
    {
      questionText: 'Who is CEO of Tesla?',
      answerOptions: [
        { answerId: 'a', answerText: 'Jeff Bezos', isCorrect: false },
        { answerId: 'b', answerText: 'Elon Musk', isCorrect: true },
        { answerId: 'c', answerText: 'Bill Gates', isCorrect: false },
        { answerId: 'd', answerText: 'Tony Stark', isCorrect: false },
      ],
    },
    {
      questionText: 'The iPhone was created by which company?',
      answerOptions: [
        { answerId: 'a', answerText: 'Apple', isCorrect: true },
        { answerId: 'b', answerText: 'Intel', isCorrect: false },
        { answerId: 'c', answerText: 'Amazon', isCorrect: false },
        { answerId: 'd', answerText: 'Microsoft', isCorrect: false },
      ],
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerId: 'a', answerText: '1', isCorrect: false },
        { answerId: 'b', answerText: '4', isCorrect: false },
        { answerId: 'c', answerText: '6', isCorrect: false },
        { answerId: 'd', answerText: '7', isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [result, setResult] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
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
      // setScore(0)
    } else {
      setToggle(true);
      setResult(false);
      // setScore(0)
    }
    //required in body isPassed, score in req body
    const courseid = '608271ce0ffb371d38b95daf';
    fetch(`http://localhost:5000/${courseid}/test`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isPassed: result,
        score: score,
      }),
    });
  };
  let dataFromResponse = undefined;
  const getData = () => {
    const courseid = '608271ce0ffb371d38b95daf';
    fetch(`http://localhost:5000/${courseid}/test`).then((res) => {
      res.json().then((result) => {
        dataFromResponse = result;
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
        console.log(dataFromResponse[0].questions);
      });
    });
  };
  return (
    <div className='quiz-main text-center'>
      {getData()}
      <h2>Final Quiz</h2>
      <div className='quiz-card'>
        {showScore ? (
          <div className='score-section'>
            <Button variant='primary' onClick={() => checkScoreHandler(score)}>
              Check your score
            </Button>
            <div>
              {toggle === true ? (
                <QuizResultComponent
                  res={result}
                  score={score}
                  quesLength={questions.length}
                />
              ) : (
                <p></p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className='question-section'>
              <div className='question-count'>
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className='question-text'>
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className='answer-section'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <div>
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerId}. {answerOption.answerText}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
