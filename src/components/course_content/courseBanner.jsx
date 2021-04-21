import React, { Component } from 'react'
import './css/courseBanner.css';

class CourseBanner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="container text-danger">
                    <h1>React JS with professional certificate</h1>
                    <p>Advance your career in UI</p>
                    <p>Offered by PSL Learning</p>
                </div>
                <div className="card featured-card">
                    <div className="card-body">
                        <div className="column text-center">
                            <h5 className="card-title">Level</h5>
                            <p className="card-text">Advance</p>
                        </div>
                        <div className="column text-center">
                            <h5 className="card-title">Course Duration</h5>
                            <p className="card-text">30 hour</p>
                        </div>
                        <div className="column text-center">
                            <h5 className="card-title">Credit Points</h5>
                            <p className="card-text">5</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseBanner;
