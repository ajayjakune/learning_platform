import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideNav from './SideNav';
import LectureVid from './LectureVid';
import Quiz from './Quiz';
import './courseEnroll.css';
import axios from 'axios';
import LoadingPage from './LoadingPage';

const Body = (props) => {
    const courseId = props.match.params.id;
    const [syllabus, setSyllabus] = useState(null);
    const [courseName, setCourseName] = useState('');
    const [quiz, setQuiz] = useState(false);
    const [currentLink, setCurrentLink] = useState('');
    const [resources, setResources] = useState('');
    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);
    const [passStatus, setPassStatus] = useState(false);
    const [lectureCompleted, setLectureCompleted] = useState(new Set(['c0l0']))
    const [totalLecture, setTotalLecture] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:5000/syllabus/${courseId}`)
            .then(res => {
                setSyllabus(res.data.syllabus);
                setCurrentLink(res.data.syllabus[0].lectures[0].link);
                setResources(res.data.syllabus[0].lectures[0].resources);
                setCourseName(res.data.course.course_name);
                return res.data.syllabus;
            }).then(res => {
                let sum = 0;
                for (let chapter of res) {
                    sum += chapter.lectures.length;
                }
                setTotalLecture(sum);
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

    function handleLecture(link, newResources, lectureId) {
        setCurrentLink(link);
        setResources(newResources);
        setLectureCompleted(lectureCompleted.add(lectureId));
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
            { syllabus && questions && resources && currentLink ?
                <Container className="container-main">
                    <Row>
                        <Col className="sidebar-main" style={{ padding: 0 }}>
                            <SideNav syllabus={syllabus} lectureCallback={handleLecture} quizCallback={handleQuiz} courseName={courseName} passStatus={passStatus} openQuiz={passStatus || (lectureCompleted.size === totalLecture)} lectureCompleted={lectureCompleted} />
                        </Col>
                        <Col md={9} >
                            {
                                quiz ?
                                    <Quiz questions={questions} courseId={courseId} score={score} passStatus={passStatus} updateScore={scoreUpdater} />
                                    :
                                    <LectureVid resources={resources} link={currentLink} />
                            }
                        </Col>
                    </Row>
                </Container >
                :
                <LoadingPage />
            }
        </div>
    );
}

export default Body;
