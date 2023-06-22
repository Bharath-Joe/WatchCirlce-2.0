import React from "react";
import { NavLink } from "react-router-dom";

export const AppHeader = () => {
    return (
    <nav className="header">
        <div className="logo">
            <img src={require("./WCLogo.png")} alt='' width='50' height='50'/>
            <NavLink to='/home'>WatchCircle</NavLink>
            {/* <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/profile'>User Profile</NavLink>
                <NavLink to='/'>WatchCircle</NavLink>
            </div> */}
        </div>
        <div className="headerTitles">
            <button className="signup_button">Sign out</button>
        </div>
    </nav>
    );
};