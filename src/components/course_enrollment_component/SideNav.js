import React,{useState,useEffect} from 'react';
import { Button, Card, Accordion, Nav, Navbar } from 'react-bootstrap';
import './courseEnroll.css';
import { GiBookPile } from 'react-icons/gi'
import { MdVideoLibrary } from 'react-icons/md';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import axios from 'axios';

const  SideNav = function (props) {

    const [topicStatus, setTopicStatus] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:5000/checkTopicStatus/${props.courseId}`,
        {headers:{ Authorization: `Bearer ${localStorage.getItem('jwt')}`}})
        .then( res => {
            res.data.courseTopics[0][0].isCompleted = true;
            setTopicStatus(res.data.courseTopics)
            console.log(res.data.courseTopics)
        })
        .catch( err => console.log(err))
    }, [props.courseId])

    function handleLecture(event,link, resources, c_index, l_index) {
        event.preventDefault();
        const { lectureCallback } = props;
        lectureCallback(link, resources);
        axios.put(`http://localhost:5000/updateTopicStatus/${props.courseId}`,
        {chapterIndex:c_index, topicIndex:l_index},
        {headers:{'Authorization' : `Bearer ${localStorage.getItem('jwt')}`}})
        .then(() => topicStatus[c_index][l_index].isCompleted = true)
        .catch(err => console.log(err))
    }
    
    function handleQuiz(event) {
        event.preventDefault();
        let ans = topicStatus.flat().filter(obj => obj.isCompleted === false)
        if (ans.length > 0) {
            alert('Please complete the Course Learnings and then try for the Quiz.')
        }
        else{
            props.quizCallback();
        }
    }

    return (
        <>
            <Navbar expand="lg" collapseOnSelect="true">
                <Navbar.Toggle aria-controls="sidebar-navbar-nav" />
                <Navbar.Collapse id="sidebar-navbar-nav">
                    <Nav defaultActiveKey="0" className="flex-column w-100">
                        <Card className="text-white bg-dark mb-4">
                            <Card.Header>{props.courseName}</Card.Header>
                        </Card>
                        <Accordion>
                            {props.syllabus.map((chapter, index) => (
                                <Card key={`${index}`}>
                                    <Accordion.Toggle as={Card.Header} className="bg-dark text-white" eventKey={`${index}`}>
                                        {chapter.title}
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey={`${index}`}>
                                        <Card.Body>
                                            {chapter.lectures.map((lecture, l_index) => (
                                                <li key={`${l_index}`} > 
                                                <Nav.Link onClick={(event) => handleLecture(event,lecture.link, lecture.resources, index, l_index)}>
                                                    { topicStatus && topicStatus[index][l_index].isCompleted ?
                                                        <div><MdVideoLibrary />&nbsp;<span>{lecture.title}</span>{' '}<IoCheckmarkDoneCircleSharp style={{ color: 'green', zIndex: 100, fontSize: '21px' }} /> </div>
                                                        : <div><MdVideoLibrary />&nbsp;{lecture.title}</div>}
                                                </Nav.Link></li>
                                            ))}
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>)
                            )}
                        </Accordion>
                        <Button onClick={handleQuiz} className="mt-2 justify-content-between" variant="dark" size="lg">< GiBookPile />&nbsp;Quiz</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
export default SideNav;