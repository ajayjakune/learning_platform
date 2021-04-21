import React, { Component } from 'react'
import './css/relatedCoursesCard.css'

class RelatedCourseCard extends Component {
    render() {
        return (
            <div className="column">
                <div className="card card-size">
                    <iframe className="card-img-top"
                        src="https://www.youtube.com/embed/QFaFIcGhPoM"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
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
