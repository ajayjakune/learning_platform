import React from 'react';
import { Button, Card, Accordion, Nav, Navbar } from 'react-bootstrap';
import './courseEnroll.css';
import { GiBookPile } from 'react-icons/gi'
import { MdVideoLibrary } from 'react-icons/md';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';

const SideNav = function (props) {
    function handleLecture(event, link, resources, lectureId) {
        event.preventDefault();
        const { lectureCallback } = props;
        lectureCallback(link, resources, lectureId);
    }
    function handleQuiz(event) {
        event.preventDefault();
        if (props.openQuiz) {
            const { quizCallback } = props;
            quizCallback("quiz");
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
                                                <li key={`${l_index}`} > <Nav.Link onClick={(event) => handleLecture(event, lecture.link, lecture.resources, `c${index}l${l_index}`)}>
                                                    {props.passStatus || (props.lectureCompleted && props.lectureCompleted.has(`c${index}l${l_index}`))
                                                        ? <div><MdVideoLibrary />&nbsp;<span>{lecture.title}</span>{' '}<IoCheckmarkDoneCircleSharp style={{ color: 'green', zIndex: 100, fontSize: '21px' }} /> </div>
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