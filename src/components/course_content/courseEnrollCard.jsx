import React, { Component } from 'react'
import './css/courseEnrollCard.css';

export class CourseEnrollCard extends Component {
    constructor() {
        super();
        this.state = { btn: "Enroll" };
    }

    handleChange() {
        if (this.state.btn === "Enroll") {
            this.setState({ btn: "Go to course" });
        }
        else if (this.state.btn === "Go to course") {
            alert("Already Registerd");
        }
    }
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
                    <button className="btn btn-primary button-center" onClick={this.handleChange.bind(this)}>{this.state.btn}</button>
                </div>
            </div>
        )
    }
}

export default CourseEnrollCard;
