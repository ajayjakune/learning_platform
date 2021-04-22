import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import Extras from './extras';
// import Video from './video';
import SideNav from './SideNav';
import '../App.css'
import { Switch, Route } from 'react-router-dom';
import LectureVid from './LectureVid';
import Quiz from './Quiz';
import '../quiz_box.css';
import Header from './Header';
import Footer from './Footer';
import Certificate from './Certificate';

const Body = (props) => {
    return (
        <div>
        <Header/>
        <Container className="container-main">
            {/* <Row style={{ height: "50px", backgroundColor: "rgb(211, 208, 208)" }}>..</Row> */}
            <Row>
                <Col style={{ padding: 0 }}>
                    <SideNav />
                </Col>
                <Col className="order-md-2" md={9} >
                    <Switch>
                        <Route exact path="/" component={LectureVid} />
                        <Route path="/chapter/:chapterNumber/lecture/:lectureNumber/" component={LectureVid} />
                        <Route path="/chapter/quiz" component={Quiz} />
                        <Route path="/chapter/certificate" component={Certificate} />
                    </Switch>
                </Col>
            </Row>
        </Container >
        <Footer/>
        </div>
    );
}

export default Body;
