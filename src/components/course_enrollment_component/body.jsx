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
    const [syllabus, setSyllabus] = useState(null);
    const [quiz, setQuiz] = useState(false);
    const [currentLink, setCurrentLink] = useState('');
    const [resources, setResources] = useState('')

    useEffect(() => {
        axios.get(`http://localhost:5000/syllabus/608271ce0ffb371d38b95daf`)
            .then(res => {
                setSyllabus(res.data.syllabus);
                setCurrentLink(res.data.syllabus[0].lectures[0].link);
                setResources(res.data.syllabus[0].lectures[0].resources);
                console.log(res.data.syllabus);
                })
            .catch(err => console.log(err))
    }, []);

    function handleLecture(link, resources1) {
        setCurrentLink(link);
        setResources(resources1);
        console.log(link);
    }
    function handleQuiz() {
        setQuiz(!quiz);
    }

    return (
        <div>
            <Container className="container-main">
                <Row>
                    <Col style={{ padding: 0 }}>
                        { syllabus ? 
                            <SideNav syllabus={syllabus} lectureCallback={handleLecture} quizCallback={handleQuiz} />
                            :
                            null
                        }
                    </Col>
                    <Col className="order-md-2" md={9} >
                        {
                            quiz ?
                                <Quiz />
                                :
                                resources && currentLink ?
                                <LectureVid resources={resources} link={currentLink} />
                                :
                                null
                        }
                        <Switch>
                            <Route path="/chapter/certificate" component={Certificate} />
                        </Switch>
                    </Col>
                </Row>
            </Container >
        </div>
    );
}

export default Body;
