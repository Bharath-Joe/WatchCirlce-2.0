import { Button, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode()
    const [isNavClicked, setisNavClicked] = useState(false);
    function handleClick() {
        const navigation = document.getElementById("Navigation-Components");
        setisNavClicked(!isNavClicked);
        if (!isNavClicked) {
            navigation.classList.add("flex");
        } else {
            navigation.classList.remove("flex");
        }
    }

    return (
        <header className="App-header">
            <h1 className="Title" onClick={() => navigate("/")}>
                WatchCircle
            </h1>
            <div className="Hamburger-Menu">
                <Button
                    variant="link"
                    colorScheme="white"
                    onClick={handleClick}
                >
                    {!isNavClicked ? (
                        <HamburgerIcon boxSize={8} />
                    ) : (
                        <CloseIcon boxSize={6} />
                    )}
                </Button>
            </div>
            <div id="Navigation-Components" className="Navigation-Components">
                <ul>
                    <li>
                        <h1 onClick={() => navigate("profile")}>
                            Watch Profile
                        </h1>
                    </li>
                    <li>
                        <h1 onClick={() => navigate("watchlist")}>
                            Watch List
                        </h1>
                    </li>
                    <li>
                        <h1 onClick={() => navigate("about")}>About</h1>
                    </li>
                    <li>
                        <h1 className="special" onClick={() => navigate("/")}>
                            Sign Out
                        </h1>
                    </li>
                    <div className="Toggle-Switch" onClick={toggleColorMode}>
                        <div className={colorMode === 'light' && "Circle"}>
                            {colorMode === 'light'}
                        </div>
                        <div className={colorMode === 'dark' && "Circle"}>
                            {colorMode === 'dark'}
                        </div>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default AppHeader;
