import { FaFacebook, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-800 text-white py-6 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Contact Info with Icons */}
                <div className="flex space-x-6 text-xl">
                    <a href="https://www.facebook.com/traftonreynolds" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        <FaFacebook />
                    </a>
                    <a href="https://www.linkedin.com/in/traftonreynolds/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/traftonrey" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                        <FaGithub />
                    </a>
                    <a href="tel:+12524893070" className="hover:text-green-400 transition">
                        <FaPhone />
                    </a>
                    <a href="mailto:reynoldstrafton@gmail.com" className="hover:text-red-400 transition">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="mt-4 md:mt-0 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition transform hover:scale-105"
                >
                    Back to Top ↑
                </button>
            </div>
        </footer>
    );
};

export default Footer;
