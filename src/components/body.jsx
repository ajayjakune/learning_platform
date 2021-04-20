import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Extras from './extras';
import Video from './video';


function Body(props) {
    return <Container fluid>
        <Row style={{ height: "100px", backgroundColor: "orange" }}>..</Row>
        <Row>
            <Col className="order-md-1" style={{ backgroundColor: "black" }}>1 of 2</Col>
            <Col className="order-md-2" md={9} >
                <Row style={{ backgroundColor: "yellow" }}>
                    <Video video="Videos/testing.mp4" />
                </Row>
                <Row style={{ backgroundColor: "pink", height: "400px" }}>
                    <Extras />
                </Row>
            </Col>
        </Row>
    </Container >
        ;
}

export default Body;