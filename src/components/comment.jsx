import React from 'react';
import { Form, Card, Button } from 'react-bootstrap';

function Comment(props) {
    return (
        <Card className="p-3">
            <Form>
                <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">Post Comment</Button>
            </Form>
        </Card>
    );
}

export default Comment;