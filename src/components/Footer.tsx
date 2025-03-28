import { FaFacebook, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800/90 backdrop-blur-lg border-t border-white/20 text-white py-6 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Social Icons */}
                <div className="flex space-x-6 text-2xl">
                    <a
                        href="https://www.facebook.com/traftonreynolds"
                        aria-label="Visit Facebook profile (opens in new tab)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                        <FaFacebook />
                        <span className="sr-only">Facebook</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/traftonreynolds/"
                        aria-label="Visit LinkedIn profile (opens in new tab)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors flex items-center gap-2"
                    >
                        <FaLinkedin />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/traftonrey"
                        aria-label="Visit GitHub profile (opens in new tab)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                    >
                        <FaGithub />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="tel:+12524893070"
                        aria-label="Call phone number"
                        className="hover:text-green-400 transition-colors flex items-center gap-2"
                    >
                        <FaPhone />
                        <span className="sr-only">Phone</span>
                    </a>
                    <a
                        href="mailto:reynoldstrafton@gmail.com"
                        aria-label="Send email"
                        className="hover:text-red-300 transition-colors flex items-center gap-2"
                    >
                        <FaEnvelope />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Return to top of page"
                    className="mt-4 md:mt-0 bg-purple-500/20 hover:bg-purple-500/30 text-purple-100 px-4 py-2 rounded-lg transition-all transform hover:scale-105 border border-white/20 cursor-pointer"
                >
                    Back to Top ↑
                    <span className="sr-only">Scroll to top</span>
                </button>
            </div>
        </footer>
    );
};

export default Footer;