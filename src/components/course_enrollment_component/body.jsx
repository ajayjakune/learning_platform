import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Extras from './extras';
import Video from './video';
import SideNav from './SideNav';
import '../../App.css'
import { Switch, Route } from 'react-router-dom';
import LectureVid from './LectureVid';
import Quiz from './Quiz';
import '../../quiz_box.css';

const Body = (props) => {
    return (
        <Container className="container-main">
            <Row style={{ height: "50px", backgroundColor: "orange" }}>..</Row>
            <Row>
                <Col style={{ padding: 0 }}>
                    <SideNav />
                </Col>
                <Col className="order-md-2" md={9} >
                    <Switch>
                        <Route exact path="/" component={LectureVid} />
                        <Route path="/chapter/:chapterNumber/lecture/:lectureNumber/" component={LectureVid} />
                        <Route path="/chapter/:chapterNumber/quiz" component={Quiz} />
                    </Switch>
                </Col>
            </Row>
        </Container >
    );
}

export default Body;
