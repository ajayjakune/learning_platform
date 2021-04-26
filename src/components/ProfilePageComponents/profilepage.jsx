import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CompletedCourses from "./CompletedCourses.jsx";
import OngoingCourses from "./ongoingCourses.jsx";
import DashBoard from "./dashboard.jsx";
import "./css/profilePage.css";
function ProfilePage() {
  return (
    <Router>
      <div
        style={{
          height: "100%",
          overflow: "auto",
          backgroundColor: "rgba(0, 0, 0, 0.03)",
        }}
      >
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
export default ProfilePage;
