import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Extras from './extras';
import Video from './video';
import SideNav from './SideNav';
import '../App.css'


const Body = (props) => {
    return (
            <Container className="container-main">
                <Row style={{ height: "50px", backgroundColor: "orange" }}>..</Row>
                <Row>
                    <Col style={{ padding: 0 }}>
                        <SideNav/>
                    </Col>
                    <Col className="order-md-2" md={9} >
                        <Row style={{ backgroundColor: "rgb(211, 208, 208)" }}>
                            <Video video="Videos/testing.mp4" />
                        </Row>
                        <Row style={{ backgroundColor: "rgb(211, 208, 208)", height: "400px" }}>
                            <Extras />
                        </Row>
                    </Col>
                </Row>
            </Container >
        );
}

export default Body;