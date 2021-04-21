import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import CompletedCourses from './CompletedCourses.jsx';
import OngoingCourses from './ongoingCourses.jsx';
import DashBoard from './dashboard.jsx';
import SideBar from "./sidebar.jsx";

class ProfilePage extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <div id="outer-container">
                    <div style={{height: "100%", overflow: "auto", backgroundColor: "rgba(0, 0, 0, 0.03)"}}>
                    <SideBar
                            pageWrapId={"page-wrap"}
                            outerContainerId={"outer-container"}
                        />
                        <p style={{fontSize: "30px"}}>Dashboard</p>
                    </div>
                <div id="page-wrap">
                            <Switch>
                                <Route exact path="/" component={DashBoard} />
                                <Route path="/ongoing" component={OngoingCourses} />
                                <Route path="/completed" component={CompletedCourses} />
                            </Switch>
                </div>
            </div>
            </Router>
         );
    }
}
 
export default ProfilePage;