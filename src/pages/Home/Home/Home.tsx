import Albums from "../Albums/Albums";
import Banner from "../Banner/Banner";
import Foods from "../Foods/Foods";
import Posts from "../Posts/Posts";
import Todos from "../Todos/Todos";
import Users from "../Users/Users";

const Home = () => {
    return (
        <div className="home w-full">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-20">
                <Banner />
                <Foods />
                <Users />
                <Posts />
                <Todos />
                <Albums />
            </div>
        </div>
    );
};

export default Home;