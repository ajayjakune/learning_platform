import "./App.css";
import NavBar from "./components/ProfilePageComponents/navbar";
import React from "react";
import ProfilePage from "./components/ProfilePageComponents/profilepage";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <ProfilePage />
        </React.Fragment>
    );
}

export default App;
