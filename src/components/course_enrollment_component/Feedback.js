import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ModalComponent from './Modal';
import './feedback_style.css';
// import ReactDom from 'react-dom';

const Feedback = () => {
    
    const [rating, setRating] = useState("5");
    const [toggle, setToggle] = useState(false)

    const submitFeedbackHandler = (event) => {
        event.preventDefault();
        console.log(rating)
    }

    const showModal = () => {
        setToggle(true);
        // return (
        //     <>            
        //         <ModalComponent/>
        //     </>
            
        // )
    }

    const handleChange = e => {
        setRating(e.target.value)
    }

    return (
        <form onSubmit={submitFeedbackHandler}>
            <div className="feedback-header">
                <h1 className="text-center text-dark">Course Feedback</h1>
            </div>
            <div className="rating">
                <input type="radio" value="1" name="star" id="star1" checked={rating === "1"} onChange={handleChange}/>
                <label for="star1">
                    <img src="/1.png" alt="emoji"/>
                    <h4>Hated it!</h4>
                </label>
                <input type="radio" name="star" value="2" id="star2" checked={rating === "2"} onChange={handleChange}/>
                <label for="star2">
                    <img src="/2.png" alt="emoji"/>
                    <h4>Disliked it!</h4>
                </label>
                <input type="radio" name="star" value="3" id="star3" checked={rating === "3"} onChange={handleChange}/>
                <label for="star3">
                    <img src="/3.png" alt="emoji"/>
                    <h4>It's Ok!</h4>
                </label>
                <input type="radio" name="star" value="4" id="star4" checked={rating === "4"} onChange={handleChange}/>
                <label for="star4">
                    <img src="/4.png" alt="emoji"/>
                    <h4>Liked it!</h4>
                </label>
                <input type="radio" name="star" id="star5" value="5" checked={rating === "5"} onChange={handleChange}/>
                <label for="star5" >
                    <img src="/5.png" alt="emoji"/>
                    <h4>Loved it!</h4>
                </label>
                <h2 className="question1">How would you rate this course?</h2>
            </div>
            <div className="feedback-ques2">
                <h2 id="question2">Please share you experience in brief</h2>
                <textarea wrap="off" cols="30" rows="5" id="textarea" placeholder="I learnt a lot from this tutorial"></textarea> 
            </div> 
            <Button variant="primary" id="feedback-submit" type="submit" onClick={showModal}>Submit</Button>
            {
                toggle ? <ModalComponent/> : <p></p>
            } 
        </form>
    )
}
export default Feedback;