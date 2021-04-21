import React from 'react';
import { Container } from 'react-bootstrap';

function Transcript(props) {
    return <Container>
        <p>{props.transcript}</p>
    </Container>;
}

export default Transcript;