import React from 'react'
// import "./Cards.css"
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SingleCard = (props) => {
    console.log(props.Title)
    console.log(props.Description)
    return (
        <>
            {/* <div className="card-wrapper col-lg-4 col-md-6 col-xs-12">
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
            <Card style={{ marginTop: "10px", marginBottom: "20px" }}>
            <Card.Img variant="top" src={props.ImageUrl} />
            <Card.Body>
                <Card.Title>{props.Title}</Card.Title>
                <Card.Text>
                {props.Description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </div>
        </>
    )
}

export default SingleCard
