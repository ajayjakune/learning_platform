import React from 'react';
import { Accordion, Card, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import { SideNavData } from './SideNavData';


const SideNav = function() {
    return (
    <div className="sidebar-main">
        <Card className="sidebar-main-card">
            <Card.Header>Course Name</Card.Header>
        </Card>
        {SideNavData.map((item, index) => {
            const listItems = item.lectures.map((lecture) => 
                <li><Nav.Link><img src="file.png" alt="file"/>{lecture}</Nav.Link></li>
            )
            return (
                <Navbar collapseOnSelect expand="lg" className="sidebar-nav">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="sidebar-toggle"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="sidebar-nav-collapse">
                        <Accordion className="sidebar-accordian">
                            <Card>
                                <Accordion.Toggle as={Card.Header} variant="link" eventKey={item.id}>
                                    {item.title}
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey={item.id}>
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
            )
        })}
        
            
    </div>
    );
}
export default SideNav;