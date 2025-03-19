import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => (
    <div>
        <Navbar />
        <div className="w-full h-screen bg-gray-100 flex items-center justify-center pt-20">
            <h1 className="text-gray-800 text-5xl font-bold">
                About Me
            </h1>
        </div>
        <Footer />
    </div>
);

export default About;
