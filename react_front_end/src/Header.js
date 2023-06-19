import React from "react";
import { NavLink } from "react-router-dom";

export const AppHeader = () => {
    return (
    <nav className="header">
        <div className="logo">
            <img src={require("./WCLogo.png")} alt='' width='70' height='70'/>
            <NavLink to='/home'>WatchCircle</NavLink>
        </div>
        <div className="headerTitles">
            <button className="signup_button"><NavLink to='/signup'>Sign up</NavLink></button>
        </div>
    </nav>
    );
};