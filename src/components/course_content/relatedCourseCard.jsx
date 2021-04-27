import React from 'react'
import { Link } from 'react-router-dom'
import './css/relatedCoursesCard.css'

const RelatedCourseCard = (props) => {
    return (
        <div>
            <div className="card card-size" style={{ "height": "400px" }}>
                <img className="card-img-top" src={props.image} alt="course_img" />
                <div className="card-body row justify-content-center">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text text-center" style={{ "overflow": "hidden", "height": "50px" }}>{props.description}</p>
                    <Link to={`/course/${props.cardId}`} className="btn btn-outline-primary">
                        {props.buttonText}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RelatedCourseCard;
