import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './feedback_style.css';

const Feedback = (props) => {
    const [rating, setRating] = useState("5");
    const [thankYou, setThankYou] = useState(false);

    const submitFeedbackHandler = (event) => {
        event.preventDefault();
        console.log(rating);
        props.onHide();
        setThankYou(true);
    }

    const handleChange = e => {
        setRating(e.target.value)
    }

    return (
        <div>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="feedback-form"
                backdrop="static"
                className="feedback-modal"
            >
                <Modal.Header>
                    <Modal.Title id="feedback-form">
                        <h1 className="text-center text-dark">Course Feedback</h1>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submitFeedbackHandler}>
                        <div className="rating">
                            <input type="radio" value="1" name="star" id="star1" checked={rating === "1"} onChange={handleChange} />
                            <label for="star1">
                                <img src="/1.png" alt="emoji" />
                                <h4>Hated it!</h4>
                            </label>
                            <input type="radio" name="star" value="2" id="star2" checked={rating === "2"} onChange={handleChange} />
                            <label for="star2">
                                <img src="/2.png" alt="emoji" />
                                <h4>Disliked it!</h4>
                            </label>
                            <input type="radio" name="star" value="3" id="star3" checked={rating === "3"} onChange={handleChange} />
                            <label for="star3">
                                <img src="/3.png" alt="emoji" />
                                <h4>It's Ok!</h4>
                            </label>
                            <input type="radio" name="star" value="4" id="star4" checked={rating === "4"} onChange={handleChange} />
                            <label for="star4">
                                <img src="/4.png" alt="emoji" />
                                <h4>Liked it!</h4>
                            </label>
                            <input type="radio" name="star" id="star5" value="5" checked={rating === "5"} onChange={handleChange} />
                            <label for="star5" >
                                <img src="/5.png" alt="emoji" />
                                <h4>Loved it!</h4>
                            </label>
                            <h2 className="question1">How would you rate this course?</h2>
                        </div>
                        <div className="feedback-ques2">
                            <h2 id="question2">Please share you experience in brief</h2>
                            <textarea wrap="off" cols="30" rows="5" id="textarea" placeholder="I learnt a lot from this tutorial"></textarea>
                        </div>
                        <Button variant="primary" id="feedback-submit" type="submit">Submit</Button>
                    </form>
                </Modal.Body>
            </Modal>


            <Modal
                show={thankYou}
                onHide={() => setThankYou(false)}
                size="lg"
                aria-labelledby="feedback-submit-message"
            >
                <Modal.Header>
                    <Modal.Title id="feedback-submit-message">
                        Feedback Submitted Successfully
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Thanks for your valuable feedback!
            </Modal.Body>
            </Modal>
        </div >
    )
}
export default Feedback;