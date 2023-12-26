import "./App.css";
import Home from "./Pages/Home.js";
import AppHeader from "./Components/AppHeader.js";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import { ThemeProvider, useTheme } from "@mui/material";

function App() {
    const theme = useTheme()
    return (
        <ThemeProvider theme={theme}>
            <ChakraProvider>
                <div className="App">
                    <AppHeader />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </ChakraProvider>
        </ThemeProvider>

    );
}

export default App;
