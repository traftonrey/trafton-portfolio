// import { Link } from "react-router-dom";
// import background from "../assets/background.jpg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => (
    <div>
        <Navbar />
        <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center pt-20">
            <h1 className="text-gray-800 text-5xl font-bold">
                Trafton Reynolds
            </h1>
            <h2 className="text-gray-800 text-3xl font-bold mt-4">
                Software Engineer
            </h2>
            <p className="text-gray-800 text-xl mt-16">
                Hey there! This site is in active development. Please check back later for more content :)
            </p>
        </div>
        <Footer />
    </div>
);

export default Home;
