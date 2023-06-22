import React from "react";
import { Input } from '@chakra-ui/react'
import { Search2Icon} from "@chakra-ui/icons";

const SearchBar = () => {
    return (
        <div className="search">
            <Input icon={<Search2Icon />} placeholder='Search' className="search-bar"/>
        </div>
    );
}
export default SearchBar;