import React, { Component } from 'react';
import './css/courseDetails.css';

class courseDetails extends Component {
    render() {
        return (
            <div className="total">
                <div classname="about-course">
                    <article className="container about-align">
                        <li class="list-group-item active" aria-current="true"><h4> About Course</h4></li>
                        <li class="list-group-item"><p>{this.props.cousrseDes}</p></li>
                    </article>
                </div>
                <div className="syllabus">
                    <article className="container">                       
                        <ul class="list-group">
                            <li class="list-group-item active" aria-current="true"> <h4>Syllabus</h4></li>
                        </ul>
                        {
                            this.props.courseSyllabus.map((chapter,index) => {
                                return(
                                <ul key={index} class="list-group">
                                    <li class="list-group-item"><h5>{chapter.title}</h5></li>
                                       { chapter.lectures.map( (topic, index1) => 
                                            <li key={index1} class="list-group-item">{topic.title}</li>
                                        )}
                                </ul>
                                )
                            })
                        }
                    </article>
                </div>
            </div>
        )
    }
}

export default courseDetails;
