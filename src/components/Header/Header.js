import React, { useState } from 'react'
import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'


function Header() {
  const [btnText, setBtnText] = useState('');
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" className="justify-content-between" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src="/Persistent.png"
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Nav>
        <Nav>
          <Nav.Link href="#Option1">Option1</Nav.Link>
          <Nav.Link href="#Option2">Option2</Nav.Link>
          <NavDropdown
            id="basic-nav-dropdown"
            title={
              <img
                src="/profile.png"
                width="30"
                height="30"
                alt="user"
              />
            }
            alignRight
          >
            <NavDropdown.Item href="#userProfile">Signed in as <br /><b>Username</b></NavDropdown.Item>
            <NavDropdown.Item href="#menuItem1">Menu Item 1</NavDropdown.Item>
            <NavDropdown.Item href="#menuItem2">Menu Item2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
