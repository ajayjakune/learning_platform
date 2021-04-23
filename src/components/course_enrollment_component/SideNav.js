import React from 'react';
import { Button, Card, Accordion, Nav, Navbar } from 'react-bootstrap';
import './courseEnroll.css';
import { GiBookPile } from 'react-icons/gi'
import { MdVideoLibrary } from 'react-icons/md';

const SideNav = function (props) {

    function handleLecture(event, link, resources) {
        event.preventDefault();
        const { lectureCallback } = props;
        lectureCallback(link, resources);
    }
    function handleQuiz(event) {
        event.preventDefault();
        const { quizCallback } = props;
        quizCallback("quiz");
    }

    return (
        <div className="sidebar-main">
            <Card className="text-white bg-dark sidebar-main-card">
                <Card.Header>Course Name</Card.Header>
            </Card>
            {
                props.syllabus.map((chapter, index) => {
                    return (
                        <Navbar key={index} collapseOnSelect expand="lg" className="sidebar-nav">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="sidebar-toggle" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="sidebar-nav-collapse">
                                <Accordion className="sidebar-accordian">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={`chapter-${index}`}>
                                            {chapter.title}
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey={`chapter-${index}`}>
                                            <Card.Body className="sidebar-card-body">
                                                <ul className="sidebar-list">
                                                    {chapter.lectures.map((lecture, index1) => (
                                                        <li key={index1}><Nav.Link onClick={(event) => handleLecture(event, lecture.link, lecture.resources)}><MdVideoLibrary />&nbsp;{lecture.title}</Nav.Link></li>
                                                    ))}
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Navbar.Collapse>
                        </Navbar>
                    );
                })}
            <Button onClick={handleQuiz} variant="dark" size="lg" block style={{ width: "90%", margin: "10px 0 10px 17px" }}>< GiBookPile />&nbsp;Quiz</Button>
            {/* {chapters}
            <Button href="/chapter/quiz" variant="dark" size="lg" block style={{ width: "90%", margin: "10px 0 10px 17px" }}><GiBookPile/>&nbsp;Quiz</Button> */}
        </div>
    );
}
export default SideNav;