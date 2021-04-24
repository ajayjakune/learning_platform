import React, { Component } from 'react';
import './css/courseDetails.css';

class courseDetails extends Component {
    render() {
        return (
            <div className="total">
                <div classname="about-course">
                    <article className="container about-align">
                        <li class="list-group-item active" aria-current="true"><h4> About Course</h4></li>
                        <li class="list-group-item"><p>React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.</p></li>
                    </article>
                </div>
                <div className="syllabus">
                    <article className="container">                       
                        <ul class="list-group">
                            <li class="list-group-item active" aria-current="true"> <h4>Syllabus</h4></li>
                            <li class="list-group-item"><h5>Overview</h5></li>
                            <li class="list-group-item">What Is React?</li>
                            <li class="list-group-item">Inspecting the Starter Code</li>
                            <li class="list-group-item">Passing Data Through Props</li>
                            <li class="list-group-item">Making an Interactive Component</li>
                            <li class="list-group-item">Developer Tools</li>
                        </ul>
                        <ul class="list-group">
                            <li class="list-group-item"><h5>Completing the Game</h5></li>
                            <li class="list-group-item">Lifting State Up</li>
                            <li class="list-group-item">Why Immutability Is Important</li>
                            <li class="list-group-item">Function Components</li>
                            <li class="list-group-item">Taking Turns</li>
                            <li class="list-group-item">Declaring a Winner</li>
                        </ul>
                        <ul class="list-group">
                            <li class="list-group-item"><h5>Adding Time Travel</h5></li>
                            <li class="list-group-item">Lifting State Up, Again</li>
                            <li class="list-group-item">Showing the Past Moves</li>
                            <li class="list-group-item">Picking a Key</li>
                            <li class="list-group-item"> Implementing Time Travel </li>
                            <li class="list-group-item"> Wrapping Up </li>
                        </ul>
                    </article>
                </div>
            </div>
        )
    }
}

export default courseDetails;
