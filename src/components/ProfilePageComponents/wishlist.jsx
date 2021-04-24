import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { CourseData } from "./data/CourseData";

const renderCard = (card, index) => {
    return (
        <div class="col-lg-3 col-md-6">
        <Card key={index}>
            <Card.Img variant="top" src={card.Photo} style={{height: '15rem', padding: "20px"}}/>               
            <Card.Body>
                <Card.Title>{card.Name} <span style={{color:"red", marginLeft: 10}}>
                    <i class="fa fa-lg fa-heart"></i>
                </span></Card.Title>
                <Card.Text>
                    {card.Description}
                </Card.Text>

                <div class="row justify-content-center">
                <Button variant="primary" style={{borderRadius:12}}>Enroll</Button>
                <Button variant="primary" style={{borderRadius:12}}>Remove</Button>
                </div>
            </Card.Body>               
        </Card>
        </div>
    )
}

class WishList extends Component {
    state = {  }
    render() { 
        return (
            <div class="container">
                <div class="row justify-content-center">

                    {CourseData.map(renderCard)}
                    </div>
            </div> 
        )
    }
}
 
export default WishList;