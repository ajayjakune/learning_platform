import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideNav from './SideNav';
import LectureVid from './LectureVid';
import Quiz from './Quiz';
import './courseEnroll.css';
import axios from 'axios';

const Body = (props) => {
    // const courseId = props.params.match.id;
    const [syllabus, setSyllabus] = useState(null);
    const [quiz, setQuiz] = useState(false);
    const [currentLink, setCurrentLink] = useState('');
    const [resources, setResources] = useState('')
    const [author, setAuthor] = useState('');
    const [questions, setQuestions] = useState(null)

    // useEffect(() => {
    //     axios.get(`http://localhost:5000/syllabus/${courseId}`)
    //         .then(res => {
    //             setSyllabus(res.data.syllabus);
    //             setCurrentLink(res.data.syllabus[0].lectures[0].link);
    //             setResources(res.data.syllabus[0].lectures[0].resources);
    //         })
    //         .catch(err => console.log(err))

    //     axios.get(`http://localhost:5000/author/${courseId}`)
    //         .then(res => {
    //             setAuthor(res.data.author);
    //         })
    //         .catch(err => console.log(err))
    //   `http://localhost:5000/${courseId}/test`

    //  axios.get(`http://localhost:5000/${courseId}/test`)
    // .then(res => {
    //     setQuestionSet(res.data);
    // })
    // .catch(err => console.log(err))
    // }, [courseId]);

    useEffect(() => {
        axios.get(`http://localhost:5000/syllabus`)
            .then(res => {
                setSyllabus(res.data);
                setCurrentLink(res.data[0].lectures[0].link);
                setResources(res.data[0].lectures[0].resources);
            })
            .catch(err => console.log(err))

        axios.get(`http://localhost:5000/author`)
            .then(res => {
                setAuthor(res.data);
            })
            .catch(err => console.log(err))
        axios.get(`http://localhost:5000/questions`)
            .then(res => {
                setQuestions(res.data);
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
                        {syllabus ?
                            <SideNav syllabus={syllabus} lectureCallback={handleLecture} quizCallback={handleQuiz} />
                            :
                            null
                        }
                    </Col>
                    <Col className="order-md-2" md={9} >
                        {
                            quiz ?
                                questions ?
                                    <Quiz questions={questions} />
                                    :
                                    null
                                :
                                resources && currentLink ?
                                    <LectureVid resources={resources} link={currentLink} author={author} />
                                    :
                                    null
                        }
                    </Col>
                </Row>
            </Container >
        </div>
    );
}

export default Body;
