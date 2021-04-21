import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import pic from "../res/profile.jpg";

class WishList extends Component {
    state = {  }
    render() { 
        return ( <Card style={{ width: '18rem', borderRadius:18}}>
        <Card.Img variant="top" src={pic} style={{height: '15rem'}}/>               
        <Card.Body>
            <Card.Title>{this.props.CourseName}</Card.Title>
            <Card.Text>
                {this.props.CourseDescription}
            </Card.Text>

            <span style={{color:"green", paddingRight: 89}}>
                <i class="fa fa-lg fa-check green"></i>
            </span>
            
            <Button variant="primary" style={{borderRadius:12}}>View Certificate</Button>
        </Card.Body>               
    </Card> );
    }
}
 
export default WishList;