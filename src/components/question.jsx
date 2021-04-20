import React from 'react';
import { Card } from 'react-bootstrap';

function Question(props) {
    return <Card className="p-3" style={{ color: '#000000' }}>
        <Card.Title>This is a question</Card.Title>
        <Card.Text>This is a answer</Card.Text>
    </Card>
        ;
}

export default Question;