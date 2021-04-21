import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { CourseData } from "./data/CourseData";

const renderCard = (card, index) => {
        return (
            <div class="col-lg-3 col-md-6">
            <Card  key={index}>
                <Card.Img variant="top" src={card.Photo} style={{height: '15rem', padding: "20px"}}/>               
                <Card.Body>
                    <Card.Title>{card.Name}</Card.Title>
                    <Card.Text>
                        {card.Description}
                    </Card.Text>

                    <div style={{paddingBottom:20}}>
                        <ProgressBar style={{borderRadius:18}} variant="success" now={card.Progress} label={`${card.Progress}%`} />
                    </div>
                    <span style={{color:"green", paddingRight: 89}}>
                        <i class="fa fa-lg fa-check green"></i>
                    </span>
                    
                    <Button variant="primary" style={{borderRadius:12}}>View Certificate</Button>
                </Card.Body>               
            </Card>
            </div>
        )
}


class CompletedCourses extends Component {
    state = {};
    render() {
        return (
            <div class="container">
                <div class="row justify-content-center">

                    {CourseData.map(renderCard)}
                    </div>
            </div>               
        );
    }
}

export default CompletedCourses;
