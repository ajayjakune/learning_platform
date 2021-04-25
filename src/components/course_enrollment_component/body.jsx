import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideNav from './SideNav';
import { Switch, Route } from 'react-router-dom';
import LectureVid from './LectureVid';
import Quiz from './Quiz';
// import Header from './Header';
// import Footer from './Footer';
import Certificate from './Certificate';
import './courseEnroll.css';
import axios from 'axios';

const Body = (props) => {
    // const courseId = props.params.match.id;
    const courseId = 1;
    const [syllabus, setSyllabus] = useState(null);
    const [quiz, setQuiz] = useState(false);
    const [currentLink, setCurrentLink] = useState('');
    const [resources, setResources] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:5000/syllabus`)
            .then(res => {
                setCurrentLink(res.data[0].lectures[0].link);
                setResources(res.data[0].lectures[0].resources);
                setSyllabus(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [courseId]);

    function handleLecture(link, resources) {
        setCurrentLink(link);
        setResources(resources);
        setQuiz(false);
    }
    function handleQuiz(msg) {
        setQuiz(true);
    }

    return (
        <div>
            {syllabus ?
                (<Container className="container-main">
                    <Row>
                        <Col style={{ padding: 0 }}>
                            <SideNav syllabus={syllabus} lectureCallback={handleLecture} quizCallback={handleQuiz} />
                        </Col>
                        <Col className="order-md-2" md={9} >
                            {
                                quiz ?
                                    <Quiz />
                                    :
                                    <LectureVid resources={resources} link={currentLink} />
                            }
                            <Switch>
                                <Route path="/chapter/certificate" component={Certificate} />
                            </Switch>
                        </Col>
                    </Row>
                </Container >
                ) :
                null
            }
        </div>
    );
}

export default Body;
