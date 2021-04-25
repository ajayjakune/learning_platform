import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SideNav from './SideNav';
import { Switch, Route } from 'react-router-dom';
import LectureVid from './LectureVid';
import Quiz from './Quiz';
import Header from './Header';
import Footer from './Footer';
import Certificate from './Certificate';

function EnrolledPage(props) {
    return (
        <div>
            <Header />
            <Container className="container-main">
                <Row>
                    <Col style={{ padding: 0 }}>
                        <SideNav course={props.course} />
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
            <Footer />
        </div>
    );
}

export default EnrolledPage;
