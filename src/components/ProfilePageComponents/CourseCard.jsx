import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CourseCard(props) {

    return (
        <div className="col-lg-3 col-md-6">
          <Card>
            <Card.Img variant="top" src={props.img} style={{ height: "15rem", padding: "20px" }} />
            <Card.Body>
              <h6 style={{width:"230px",whiteSpace:"nowrap", overflow:"hidden",textOverflow:"ellipsis"}}>{props.name}</h6>
                <Button variant="primary" style={{ borderRadius: 12 }}>
                {props.text}
                </Button>
            </Card.Body>
          </Card>
        </div>
      );
}

export default CourseCard
