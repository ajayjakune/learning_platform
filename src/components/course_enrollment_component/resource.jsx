import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../../App.css'
import { AiOutlineLink } from "react-icons/ai";

function Resource(props) {
    return <Container>
        <Card className="mt-2" style={{ marginBottom: "10px", borderRadius: "5px" }}>
            <Card.Header>Reference Links</Card.Header>
            <Card.Body>
                <Card.Text className="resource-card-body">
                    <ul style={{ listStyleType: "none" }}>
                        {
                            props.resources.map((resource, index) => {
                                return <li key={index}><AiOutlineLink /><a href={`${resource.link}`} target="_blank" rel="noreferrer">{resource.title}</a></li>
                            })}
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
    </Container>
}

export default Resource;