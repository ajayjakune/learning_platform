import React, { Component } from 'react'
import './css/relatedCoursesCard.css'

class RelatedCourseCard extends Component {
    render() {
        return (
            <div className="column">
                <div className="card card-size">
                    <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="course_img" />
                    <div className="card-body">
                        <h5 className="card-title">React JS</h5>
                        <p className="card-text">Enroll for react js course and make your career grow</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default RelatedCourseCard;
