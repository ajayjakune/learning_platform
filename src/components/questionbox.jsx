import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Comment from './comment';
import Question from './question';

function QuestionBox(props) {
    return <Container className="p-3">
        <Question />
        <Comment />
    </Container>
        ;
}

export default QuestionBox;