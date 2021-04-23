import React, { useState } from 'react';
import { Form, Card, Button } from 'react-bootstrap';
// import comments from './comments';
// import Question from './question';

function CommentPost(props) {
    
    const [ content, setContent ] = useState("");
    const [ comments, setComments ] = useState([]);


    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log({"Post" : content})
        setComments(comments => [ ...comments, content ])
        setContent("");
    }

    return (
        <div style={{ maxHeight:"320px", overflow:"auto" }}>
            <Card className="p-3">
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group controlId="comment">
                        <Form.Label>Post your comments below</Form.Label>
                        <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Post Comment</Button>
                    <Card.Header style={{ marginTop:"10px" }}>Comments</Card.Header>
                    <Card.Body className="comment-card-body">
                        <ul>
                            {comments.map((comment, index) => {
                                return <li key={index}> &#9998; {comment}</li>
                            })}
                        </ul>
                    </Card.Body>
                </Form>
            </Card>
        </div>
    );
}

export default CommentPost;