import { Button, useColorMode, Text } from "@chakra-ui/react";
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
            <Text className="Title" onClick={() => navigate("/")}>
                Watch<span className="Title-Circle">Circle</span>
            </Text>
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
                        <h1 onClick={() => navigate("about")}>About</h1>
                    </li>
                    <li>
                        <h1 className="special" onClick={() => navigate("/")}>
                            Sign Out
                        </h1>
                    </li>
                    <div className="Toggle-Switch" onClick={toggleColorMode}>
                        <div className={colorMode === 'light' ? "Circle" : undefined}>
                            {colorMode === 'light'}
                        </div>
                        <div className={colorMode === 'dark' ? "Circle": undefined}>
                            {colorMode === 'dark'}
                        </div>
                    </div>
                </ul>
            </div>
        </header>
    );
};

export default AppHeader;
