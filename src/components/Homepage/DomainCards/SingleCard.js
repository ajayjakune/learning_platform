import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import './Cards.css'


const SingleCard = (props) => {
    // console.log(props.Title)
    // console.log(props.Description)



    
    return (
        <>
            <div className="card-wrapper cus-card-wrapper col-lg-4 col-md-6 col-xs-12" style={{ marginBottom: "30px"}}>
                <div className="card cus-card">
                    <div className="card-img-wrapper cus-card-img-wrapper">
                        <img className="card-img-top cus-card-img-top" src={props.imageUrl} alt="Card image cap"></img>
                    </div>
                    <div className="card-body cus-card-body">
                        <h5 className="card-title cus-card-title">{props.title}</h5>
                        <p className="card-text cus-card-text">{props.description}</p>
                        <Link to={ props.for === 'domain' ? `/domain/${props.cardId}` : `/course/${props.cardId}`}>
                        <div className="btn btn-primary fbtn">{props.buttonText}</div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
            <Card style={{ marginTop: "10px", marginBottom: "20px", height: "300px", borderRadius: "15px", }} className="fcard" > 
            <Card.Img variant="top" src={props.imageUrl} style={{ objectFit: "cover", height: "180px", borderTopRightRadius: "15px", borderTopLeftRadius: "15px"}} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title> 
                {/* <Card.Text>
                    {props.Description}
                </Card.Text>
                <Link to={ props.for === 'domain' ? `/domain/${props.cardId}` : `/course/${props.cardId}`}>
                <Button variant="primary" className="fbtn" >{props.buttonText}</Button>
                </Link>
            </Card.Body>
            </Card>
            </div> */}
        </>
    )
}

export default SingleCard
