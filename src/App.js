import logo from "./logo.svg";
import NavBar from "./components/ProfilePageComponents/navbar";
import React from "react";
import SideBar from "./components/ProfilePageComponents/sidebar";
import DashBoard from "./components/ProfilePageComponents/dashboard";
import WishList from "./components/ProfilePageComponents/wishlist";
import ProfilePage from "./components/ProfilePageComponents/profilepage";
import { Router } from "react-router";

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <ProfilePage />
        </React.Fragment>
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>
    );
}

export default App;
