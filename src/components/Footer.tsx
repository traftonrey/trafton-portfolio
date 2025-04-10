import { FaFacebook, FaLinkedin, FaGithub, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-800/90 to-gray-900/90 backdrop-blur-lg border-t border-emerald-500/20 text-gray-300 py-8 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Social Icons with Unified Theme */}
                <div className="flex space-x-6 text-2xl">
                    <a
                        href="https://www.facebook.com/traftonreynolds"
                        aria-label="Facebook profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-all"
                    >
                        <FaFacebook />
                        <span className="sr-only">Facebook</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/traftonreynolds/"
                        aria-label="LinkedIn profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 transition-all"
                    >
                        <FaLinkedin />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/traftonrey"
                        aria-label="GitHub profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-all"
                    >
                        <FaGithub />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="tel:+12524893070"
                        aria-label="Call phone number"
                        className="p-2 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 hover:text-indigo-300 transition-all"
                    >
                        <FaPhone />
                        <span className="sr-only">Phone</span>
                    </a>
                    <a
                        href="mailto:reynoldstrafton@gmail.com"
                        aria-label="Send email"
                        className="p-2 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 transition-all"
                    >
                        <FaEnvelope />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                {/* Back to Top Button */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Return to top of page"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border-indigo-500/20 hover:border-emerald-500/40 transition-colors rounded-lg transform hover:scale-[1.02] border cursor-pointer"
                >
                    <span>Back to Top</span>
                    <span className="text-lg transform translate-y-[-1px]">↑</span>
                    <span className="sr-only">Scroll to top</span>
                </button>
            </div>

            {/* Copyright + Additional Info */}
            <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-emerald-500/10 text-center md:text-left">
                <p className="text-sm text-emerald-400/80">
                    © {new Date().getFullYear()} Trafton Reynolds
                </p>
                <p className="text-xs mt-2 text-gray-400">
                    Built with React, TypeScript, and Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;