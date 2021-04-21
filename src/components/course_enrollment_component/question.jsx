import React from 'react';
import { Card } from 'react-bootstrap';
import comments from './comments'

function Question(props) {

    const commentsList = comments.map((comment, index) => {
        <li>{comment}</li>
    })

    return <Card className="p-3 mt-3" style={{ color: '#000000' }}>
        <Card.Title>Comment section</Card.Title>
        <Card.Text>{commentsList}</Card.Text>
    </Card>
}

export default Question;