import React from 'react';
import { ListGroup, Container } from 'react-bootstrap';

function Resource(props) {
    return <Container>
        <ListGroup className="p-3">
            <ListGroup.Item>Google</ListGroup.Item>
            <ListGroup.Item>Youtube</ListGroup.Item>
            <ListGroup.Item>Persistent</ListGroup.Item>
        </ListGroup>
    </Container>
        ;
}

export default Resource;