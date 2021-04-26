import React, { Component } from 'react'
import './css/courseBanner.css';

class CourseBanner extends Component {
    render() {
        return (
            <div className="banner" style={{backgroundImage:'url("'+this.props.courseBanner+'")'}}>
                <div className="container text-warning">
                    <h1>{this.props.courseTitle}</h1>
                    <p>Offered by Gurukul</p>
                </div>
                <div className="card featured-card">
                    <div className="card-body">
                        <div className="column text-center">
                            <h5 className="card-title">Domain</h5>
                            <p className="card-text">{this.props.courseDomain}</p>
                        </div>
                        <div className="column text-center">
                            <h5 className="card-title">Level</h5>
                            <p className="card-text">Beginner</p>
                        </div>
                        <div className="column text-center">
                            <h5 className="card-title">Enrollments</h5>
                            <p className="card-text">{this.props.enrollments}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// style={{backgroundImage:'url("link")'}}

export default CourseBanner;
