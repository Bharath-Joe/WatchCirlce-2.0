import React from "react";
// import UserTable from "./Landing Components/userTable";
import SearchBar from "./Landing Components/searchBar";
import {Grid} from "./Landing Components/grid";
import { AppHeader } from "./Header";

export const Landing = () => {
    return (
    <div className="landing">
        <AppHeader/>
        <hr />
        <h1 className="watchList_Title">My Watches</h1>
        <SearchBar />
        <Grid />
    </div>
    );
};