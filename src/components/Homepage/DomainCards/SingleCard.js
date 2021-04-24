import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import './Card.css'


const SingleCard = (props) => {
    // console.log(props.Title)
    // console.log(props.Description)


    
    return (
        <>
            {/* <div className="col-lg-4 col-md-6 col-xs-12" style={{ marginBottom: "30px"}}>
                <div className="card">
                    <div className="card-img-wrapper">
                        <img className="card-img-top" src={props.ImageUrl} alt="Card image cap"></img>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.Title}</h5>
                        <p className="card-text">{props.Description}</p>
                        <a href="#" className="btn btn-primary">{props.button}</a>
                    </div>
                </div>
            </div> */}

            <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <Card style={{ marginTop: "10px", marginBottom: "20px", height: "300px", borderRadius: "15px", }} className="fcard" > 
            <Card.Img variant="top" src={props.imageUrl} style={{ objectFit: "cover", height: "180px", borderTopRightRadius: "15px", borderTopLeftRadius: "15px"}} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title> 
                {/* <Card.Text>
                    {props.Description}
                </Card.Text> */}
                <Link to={ props.for === 'domain' ? `/domain/${props.cardId}` : `/course/${props.cardId}`}>
                <Button variant="primary" className="fbtn" >{props.buttonText}</Button>
                </Link>
            </Card.Body>
            </Card>
            </div>
        </>
    )
}

export default SingleCard
