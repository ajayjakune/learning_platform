import React from 'react';
import { Container, Card } from 'react-bootstrap';
import '../App.css'

function Resource(props) {
    return <Container>
        <Card style={{ marginBottom : "10px", borderRadius:"5px" }}>
            <Card.Header>Reference Links</Card.Header>
            <Card.Body>
                <Card.Text className="resource-card-body">
                    <ul>
                        <li><img src="link.png" alt="link"/><a href="https://reactjs.org/docs/components-and-props.html" target="_blank" rel="noreferrer">Component and Props</a></li>
                        <li><img src="link.png" alt="link"/><a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noreferrer">State and Life cycle</a></li>    
                        <li><img src="link.png" alt="link"/><a href="https://reactjs.org/docs/state-and-lifecycle.html" target="_blank" rel="noreferrer">State and Life cycle</a></li>    
                    </ul>
                </Card.Text>
            </Card.Body>
        </Card>
        
    </Container>
}

export default Resource;