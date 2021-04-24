import React/*,{ useState, useEffect}*/ from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideNav from './SideNav';
import { Switch, Route } from 'react-router-dom';
import LectureVid from './LectureVid';
import Quiz from './Quiz';
import Header from './Header';
import Footer from './Footer';
import Certificate from './Certificate';
import './courseEnroll.css';
// import axios from 'axios';

const Body = (props) => {

    // const courseId = props.params.match.id;
    // const [syllabus, setSyllabus] = useState(null);
    // // const [currentLink, setCurrentLink] = useState('');

    // useEffect(() => {
    //     axios.get(`http:localhost:5000/syllabus/${courseId}`)
    //     .then( res => setSyllabus(res.data))
    //     .catch( err => console.log(err))
    // }, [courseId])

    return (
        <div>
        <Header/>
        <Container className="container-main">
            <Row>
                <Col style={{ padding: 0 }}>
                    {/* <SideNav syllabus={syllabus}  callback={()=>setCurrentLink('jbsifdjb')}/> */}
                    <SideNav />
                </Col>
                <Col className="order-md-2" md={9} >
                    {/* <LectureVid syllabus={syllabus} link={currentLink} /> */}
                    <Switch>
                        <Route exact path="/" component={LectureVid} />
                        <Route path="/chapter/:chapterNumber/lecture/:lectureNumber/" component={LectureVid} />
                        <Route path="/chapter/quiz" component={Quiz} />
                        <Route path="/chapter/certificate" component={Certificate} />
                    </Switch>
                </Col>
            </Row>
        </Container >
        <Footer/>
        </div>
    );
}

export default Body;
