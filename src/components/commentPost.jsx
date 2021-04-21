import React, { useEffect, useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
import comments from './comments';
import Question from './question';

function CommentPost(props) {
    
    const [ content, setContent ] = useState("");

    const state = {
        comments : []
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log({"Post" : content})
        setContent("");
    }

    useEffect( () => {
        // console.log(content)
    }, [content])
    return (
        <Card className="p-3">
            <Form onSubmit={onSubmitHandler}>
                <Form.Group controlId="comment">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">Post Comment</Button>
                <Card.Body>
                </Card.Body>
            </Form>
        </Card>
    );
}

export default CommentPost;