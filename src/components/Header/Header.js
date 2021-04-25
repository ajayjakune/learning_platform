import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {NavDropdown, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import axios from 'axios';
import './Header.css'
import SearchCourse from './SearchCourse';

function Header() {   
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
      if(searchText.length > 0){
      axios.get(`http://localhost:5000/search/course?courseName=${searchText}`)
      .then( res => {
        setSearchResult(res.data)
      })
      .catch( err => console.log(err))}
    }, [searchText])

    const handleSearch = (e) => setSearchText(e.target.value);
    
    const handleResultClick = () => setSearchText('')

    return (
      <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className="justify-content-between" sticky="top">
        <Link to="/homepage">
        <Navbar.Brand>  
            <img
              src="/gurukul.png"
              width="160"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Form inline>
              <FormControl 
                type="text" 
                placeholder="Search" 
                style={{width:"300px"}} 
                onChange={handleSearch} 
                value={searchText} 
              />
            </Form>
            <div className="result-component">
              {
                searchText ?
                searchResult.map( (course, index) =>
                  <SearchCourse key={index} img={course.course_photo} name={course.course_name} courseId={course._id} onSelect={handleResultClick}/>
                )
                :
                null
              }
            </div>
        </Nav>
          <Nav>
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
              <NavDropdown.Item href="#userProfile">Signed in as <br/><b>Username</b></NavDropdown.Item>
              <NavDropdown.Item href="#menuItem2">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Header
