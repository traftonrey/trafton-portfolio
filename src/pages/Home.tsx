// import { Link } from "react-router-dom";
// import background from "../assets/background.jpg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => (
    <div>
        <Navbar />
        <div className="w-full h-screen bg-gray-100 flex items-center justify-center pt-20">
            <h1 className="text-gray-800 text-5xl font-bold">
                Trafton Reynolds
            </h1>
        </div>
        <Footer />
    </div>
);

export default Home;
