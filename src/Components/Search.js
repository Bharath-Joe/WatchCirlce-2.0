import {
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";

const Search = () => {
    const [userSearch, setuserSearch] = useState("");
    return (
        <div className="SearchBar">
            <InputGroup>
                <InputLeftElement>
                    <SearchIcon />
                </InputLeftElement>
                <Input
                    type="text"
                    value={userSearch}
                    onChange={(e) => setuserSearch(e.target.value)}
                    placeholder="Search"
                    _placeholder={{ color: "white" }}
                />
                {userSearch.length !== 0 ? (
                    <InputRightElement onClick={() => setuserSearch("")}>
                        <CloseIcon className="CloseIcon" />
                    </InputRightElement>
                ) : (
                    []
                )}
            </InputGroup>
        </div>
    );
};

export default Search;
