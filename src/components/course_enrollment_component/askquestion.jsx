import React from 'react'
import { Form, Card, Button } from 'react-bootstrap';

function AskQuestion(props) {
    return (
        <Card className="p-3">
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Post a Question</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">Post It !!</Button>
            </Form>
        </Card>
    );
}

export default AskQuestion;