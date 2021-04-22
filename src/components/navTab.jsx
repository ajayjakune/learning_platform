import React from 'react';
import { Accordion, Card, Nav, Navbar } from 'react-bootstrap';
import '../App.css';

export default function NavTab(props) {
    const listItems = props.lectures.map((lecture) => (
        <li><Nav.Link href={"/chapter/" + props.chapterNum + "/lecture/" + lecture.lectureNum}><img src="/file.png" alt="file" />{lecture.title}</Nav.Link></li>
    ));

    return (
        <Navbar collapseOnSelect expand="lg" className="sidebar-nav">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" id="sidebar-toggle" />
            <Navbar.Collapse id="responsive-navbar-nav" className="sidebar-nav-collapse">
                <Accordion className="sidebar-accordian">
                    <Card>
                        <Accordion.Toggle as={Card.Header} variant="link" eventKey={props.keyVal}>
                            {props.chapterName}
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={props.keyVal}>
                            <Card.Body className="sidebar-card-body">
                                <ul className="sidebar-list">
                                    {listItems}
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Navbar.Collapse>
        </Navbar>
    );
}
