import React, { Component } from 'react'
import './css/courseBanner.css';

class CourseBanner extends Component {
    render() {
        return (
            <div className="banner" style={{ backgroundImage: 'url("' + this.props.courseBanner + '")' }}>
                <div className="container text-warning">
                    <h1>{this.props.courseTitle}</h1>
                    <p>Offered by Gurukul</p>
                </div>
            </div>
        )
    }
}


export default CourseBanner;
