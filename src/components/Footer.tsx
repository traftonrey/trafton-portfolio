import { FaFacebook, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
    return (
        <footer className="bg-gray-800/90 backdrop-blur-lg border-t border-white/20 text-white py-6 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Social Icons */}
                <div className="flex space-x-6 text-2xl">
                    <a href="https://www.facebook.com/traftonreynolds"
                        className="hover:text-blue-400 transition-colors">
                        <FaFacebook />
                    </a>
                    <a href="https://www.linkedin.com/in/traftonreynolds/"
                        className="hover:text-blue-500 transition-colors">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/traftonrey"
                        className="hover:text-cyan-400 transition-colors">
                        <FaGithub />
                    </a>
                    <a href="tel:+12524893070"
                        className="hover:text-green-400 transition-colors">
                        <FaPhone />
                    </a>
                    <a href="mailto:reynoldstrafton@gmail.com"
                        className="hover:text-red-300 transition-colors">
                        <FaEnvelope />
                    </a>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="mt-4 md:mt-0 bg-purple-500/20 hover:bg-purple-500/30 text-purple-100 px-4 py-2 rounded-lg transition-all transform hover:scale-105 border border-white/20 cursor-pointer"
                >
                    Back to Top ↑
                </button>
            </div>
        </footer>
    );
};

export default Footer;
