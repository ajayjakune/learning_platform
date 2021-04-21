import logo from "./logo.svg";
import NavBar from "./components/navbar";
import React from "react";
import SideBar from "./components/sidebar";
import DashBoard from "./components/dashboard";
import WishList from "./components/wishlist";
import ProfilePage from "./components/profilepage";
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
