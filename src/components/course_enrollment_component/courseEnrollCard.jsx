import React, { Component } from 'react'
import './css/courseEnrollCard.css';

export class CourseEnrollCard extends Component {
    render() {
        return (
            <div className="card card-size float-card sticky">
                <iframe className="card-img-top"
                    src="https://www.youtube.com/embed/QFaFIcGhPoM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
                <div className="card-body">
                    <h5 className="card-title">React JS</h5>
                    <p className="card-text">Enroll for react js course and make your career grow</p>
                    <a href="#" className="btn btn-primary button-center">&nbsp;&nbsp;&nbsp;Enroll&nbsp;&nbsp;&nbsp;</a>
                </div>
            </div>
        )
    }
}

export default CourseEnrollCard;
