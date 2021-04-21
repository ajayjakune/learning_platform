import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { CourseData } from "../data/CourseData";

const renderCard = (card, index) => {
        return (
            <div class="col-sm-3 justify-content-center" style={{paddingInline: 70, paddingBlock: 20}}>
            <Card style={{ width: '18rem', borderRadius:18}} key={index}>
                <Card.Img variant="top" src={card.Photo} style={{height: '15rem'}}/>               
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
            <div class="row justify-content-left">
                {CourseData.map(renderCard)}
            </div>          
        );
    }
}

export default CompletedCourses;
