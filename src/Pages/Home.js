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
        return <h1 className="h1"> {greeting + " Joe!"}</h1>;
    };

    return (
        <div className="Home-Style">
            {displaytime()}
        </div>
    );
};
export default Home;
