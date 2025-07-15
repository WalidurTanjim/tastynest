import Banner from "../Banner/Banner";
import Posts from "../Posts/Posts";
import Users from "../Users/Users";

const Home = () => {
    return (
        <div className="home w-full">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-20">
                <Banner />
                <Users />
                <Posts />
            </div>
        </div>
    );
};

export default Home;