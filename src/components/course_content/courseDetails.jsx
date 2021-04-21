import React, { Component } from 'react';
import './css/courseDetails.css';

class courseDetails extends Component {
    render() {
        return (
            <div>
                <article className="container about-align">
                    <h3>About Course</h3>
                    <p>React is an open-source, front end, JavaScript library<br />
                    for building user interfaces or UI components.<br />
                    It is maintained by Facebook and a community of<br />
                    individual developers and companies.<br />
                    </p>
                </article>
                <article className="container">
                    <h3>Syllabus</h3>
                    <p>
                        <h4>Overview</h4>
                    What Is React?<br />
                    Inspecting the Starter Code<br />
                    Passing Data Through Props<br />
                    Making an Interactive Component<br />
                    Developer Tools<br /><br />
                        <h4>Completing the Game</h4>
                    Lifting State Up<br />
                    Why Immutability Is Important<br />
                    Function Components<br />
                    Taking Turns<br />
                    Declaring a Winner<br /><br />
                        <h4>Adding Time Travel</h4>
                    Storing a History of Moves<br />
                    Lifting State Up, Again<br />
                    Showing the Past Moves<br />
                    Picking a Key<br />
                    Implementing Time Travel<br />
                    Wrapping Up<br />
                    </p>
                </article>
            </div>
        )
    }
}

export default courseDetails;
