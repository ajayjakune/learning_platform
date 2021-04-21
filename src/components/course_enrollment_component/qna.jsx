import React from 'react';
import { Container } from 'react-bootstrap';
// import AskQuestion from './askquestion';
import QuestionBox from './questionbox'

function QnA(props) {
    return <Container>
        <QuestionBox />
        {/* <AskQuestion /> */}
    </Container>

    // <Container className="p-2">
    //     <Card>
    //         <Card.Header as="h5">Username</Card.Header>
    //         <Card.Body>
    //             <Card.Title>This is a question</Card.Title>
    //             <Card.Text className="p-3" style={{ border: "1px solid", }}>
    //                 This is an answer
    //         </Card.Text>
    //         </Card.Body>
    //     </Card>
    //     <Card className="p-3">
    //         <Form>
    //             <Form.Group controlId="exampleForm.ControlTextarea1">
    //                 <Form.Label>Post a Question</Form.Label>
    //                 <Form.Control as="textarea" rows={3} />
    //             </Form.Group>
    //             <Button variant="primary" type="submit">Post It !!</Button>
    //         </Form>
    //     </Card>
    // </Container>
    //     ;
}

export default QnA;