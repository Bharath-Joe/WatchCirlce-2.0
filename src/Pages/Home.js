import HomeCardList from "../Components/HomeCardList.js";
import { Text } from "@chakra-ui/react";
const Home = () => {
    const displaytime = () => {
        const date = new Date();
        var greeting = "";
        if (date.getHours() > 18) {
            greeting = "Good Evening";
        } else if (date.getHours() > 12) {
            greeting = "Good Afternoon";
        } else if (date.getHours() > 5) {
            greeting = "Good Morning";
        }
        return <Text className="Greeting"> {greeting + "!"}</Text>;
    };

    return (
        <div className="Home-Style">
            <div className="Home-Header-Text">
                {displaytime()}
                <Text fontSize="20" fontWeight="100">Welcome to your cinematic sanctuary, where entertainment meets organization.</Text>
            </div>
            <div className="Box">
                <HomeCardList />
            </div>
        </div>
    );
};
export default Home;
