import React from "react";
// import UserTable from "./Landing Components/userTable";
import SearchBar from "./Landing Components/searchBar";
import {Grid} from "./Landing Components/grid";

export const Landing = () => {
    return (
    <div className="landing">
        <h1 className="watchList_Title">My WatchList</h1>
        {/* <SearchBar /> */}
        <Grid />
    </div>
    );
};