import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideNav from './SideNav';
import LectureVid from './LectureVid';
import Quiz from './Quiz';
import './courseEnroll.css';
import axios from 'axios';

const Body = (props) => {
    const courseId = props.match.params.id;
    const [syllabus, setSyllabus] = useState(null);
    const [courseName, setCourseName] = useState('');
    const [quiz, setQuiz] = useState(false);
    const [currentLink, setCurrentLink] = useState('');
    const [resources, setResources] = useState('')
    const [author, setAuthor] = useState('');
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [passStatus, setPassStatus] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:5000/syllabus/${courseId}`)
            .then(res => {
                setSyllabus(res.data.syllabus);
                setCurrentLink(res.data.syllabus[0].lectures[0].link);
                setResources(res.data.syllabus[0].lectures[0].resources);
                setCourseName(res.data.course.course_name)
            })
            .catch(err => console.log(err))

        axios.get(`http://localhost:5000/author/${courseId}`)
            .then(res => {
                setAuthor(res.data.author);
            })
            .catch(err => console.log(err))

        axios.get(`http://localhost:5000/${courseId}/test`, { headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` } })
            .then(res => {
                if (res.data.isPassed) {
                    setScore(res.data.score);
                    setPassStatus(res.data.isPassed);
                }
                else {
                    setQuestions(res.data[0].questions);
                }
            })
            .catch(err => console.log(err))
    }, [courseId]);

    function handleLecture(link, resources1) {
        setCurrentLink(link);
        setResources(resources1);
        setQuiz(false);
    }
    function handleQuiz() {
        setQuiz(true);
    }

    function scoreUpdater(quizScore) {
        setScore(quizScore);
        setPassStatus(true);
    }

    return (
        <div>
            <Container className="container-main">
                <Row>
                    <Col className="sidebar-main" style={{ padding: 0 }}>
                        {syllabus ?
                            <SideNav syllabus={syllabus} lectureCallback={handleLecture} quizCallback={handleQuiz} courseName={courseName}/>
                            :
                            null
                        }
                    </Col>
                    <Col md={9} >
                        {
                            quiz ?
                                questions ?
                                    <Quiz questions={questions} courseId={courseId} score={score} show_score={passStatus} updateScore={scoreUpdater} courseName={courseName} />
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
