import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CompletedCourses from "./CompletedCourses.jsx";
import OngoingCourses from "./ongoingCourses.jsx";
import DashBoard from "./dashboard.jsx";
import WishList from "./wishlist.jsx";
import SideBar from "./sidebar.jsx";
import "./css/profilePage.css"


class ProfilePage extends Component {
    state = {};
    render() {

        return (
            <Router>
                <div
                    style={{
                        height: "100%",
                        overflow: "auto",
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                    }}
                >
                    <SideBar />
                    <div id="page-wrap">
                    <Switch>
                        {/* add "profile/" for main-routing" */}
                        <Route exact path="/" component={DashBoard} /> 
                        <Route path="/ongoing" component={OngoingCourses} />
                        <Route path="/completed" component={CompletedCourses} />
                        <Route path="/wishlist" component={WishList} />
                    </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default ProfilePage;
