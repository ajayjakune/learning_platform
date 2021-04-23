import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../../App.css'
import { AiOutlineLink } from "react-icons/ai";

function Resource(props) {
    return <Container>
        <Card style={{ marginBottom: "10px", borderRadius: "5px" }}>
            <Card.Header>Reference Links</Card.Header>
            <Card.Body>
                <Card.Text className="resource-card-body">
                    <ul style={{ listStyleType: "none" }}>
                        <li><AiOutlineLink /><a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noreferrer">Component and Props</a></li>
                        <li><AiOutlineLink /><a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noreferrer">State and Life cycle</a></li>
                        <li><AiOutlineLink /><a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noreferrer">State and Life cycle</a></li>
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>

    </Container>
}

export default Resource;