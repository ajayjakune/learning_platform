import React from 'react';
import { Container } from 'react-bootstrap';
import CommentPost from './commentPost';
// import Question from './question';

function QuestionBox(props) {
    return <Container className="p-3" >
        {/* <Question /> */}
        <CommentPost />
    </Container>
        ;
}

export default QuestionBox;