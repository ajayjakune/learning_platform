import React from 'react';
import { Container, Card } from 'react-bootstrap';

function Doubt(props) {
    return <Container>
        <Card className="mt-2" style={{ marginBottom: "10px", borderRadius: "5px" }}>
            <Card.Header>Email Your Queries Here !! </Card.Header>
            <Card.Body>
                <p><i>Author : </i> Ravindra</p>
                <p><i>Email : </i> ravin@gmail.com</p>
            </Card.Body>
        </Card>
    </Container>;
}

export default Doubt;