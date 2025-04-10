import { motion } from "framer-motion";
import { FaBasketballBall, FaDumbbell, FaExternalLinkAlt, FaGamepad, FaGithub, FaGraduationCap } from "react-icons/fa";
import famPic from "../assets/grad-family.jpg";
import fishingPic from "../assets/fishing.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { fetchProjects } from "../utils/api";
import { formatDate } from "../utils/formatDate";
import { parseDate } from "../utils/parseDate";

interface Project {
    projectId: string;
    description: string;
    technologies: string[];
    dates: string[];
    githubUrl?: string;
    link?: string;
    technicalDetails?: {
        title: string;
        description: string;
    }[];
}

const About = () => {
    const [showFishingImage, setShowFishingImage] = useState(false);
    const [featuredProject, setFeaturedProject] = useState<Project | null>(null);
    const [loadingProject, setLoadingProject] = useState(true);

    useEffect(() => {
        const getFeaturedProject = async () => {
            try {
                setLoadingProject(true);
                const cachedData = localStorage.getItem("projects");

                if (cachedData) {
                    const { data, expiry } = JSON.parse(cachedData);
                    if (Date.now() < expiry) {
                        const sorted = [...data].sort((a, b) =>
                            parseDate(b.dates[1]).getTime() - parseDate(a.dates[1]).getTime()
                        );
                        setFeaturedProject(sorted[0]);
                        setLoadingProject(false);
                        return;
                    }
                }

                const freshData = await fetchProjects();
                const sorted = [...freshData].sort((a, b) =>
                    parseDate(b.dates[1]).getTime() - parseDate(a.dates[1]).getTime()
                );
                setFeaturedProject(sorted[0]);

                localStorage.setItem(
                    "projects",
                    JSON.stringify({
                        data: freshData,
                        expiry: Date.now() + 24 * 60 * 60 * 1000,
                    })
                );
            } catch (error) {
                console.error("Error loading featured project:", error);
            } finally {
                setLoadingProject(false);
            }
        };

        getFeaturedProject();
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
            <Navbar />

            <main className="flex-grow w-full pt-24 pb-12">
                <div className="max-w-4xl mx-auto px-4 md:px-8">
                    {/* Personal Introduction */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-emerald-500 to-indigo-400 bg-clip-text text-transparent mb-6 md:leading-relaxed py-2">
                            Trafton Reynolds
                        </h1>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div className="relative group">
                                <img
                                    src={famPic}
                                    loading="lazy"
                                    alt="Celebrating UNCW graduation with family"
                                    className="rounded-xl md:w-full md:object-cover md:object-center aspect-auto md:h-150"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 rounded-xl" />
                            </div>
                            <p className="text-gray-300 text-lg text-left">
                                <span className="text-emerald-400">Hi, I'm Trafton</span> – a developer from coastal North Carolina with a passion for building functional solutions.<br /><br />
                                I'm a firm believer in balancing that tech passion with personal growth. When I'm not coding, you can often find me weightlifting, gaming, or spending time with my friends & family.<br /><br />
                                I love the challenge of coding and the thrill of sports, and I'm always looking for ways to combine the two. Whether it's building a new app or hitting the gym, I'm all about pushing limits and having fun along the way.<br /><br />
                                Currently seeking opportunities to contribute to meaningful software solutions. I thrive in collaborative environments and am eager to learn from others while sharing my own insights. Let's connect and explore how we can create something amazing together!<br /><br />
                            </p>
                        </div>
                    </motion.div>

                    {/* Core Sections */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Personal Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            {/* Hobbies */}
                            <div className="p-6 bg-gray-800/30 rounded-xl border border-indigo-500/20">
                                <h2 className="text-xl font-semibold text-indigo-400 mb-6 flex items-center gap-3">
                                    <FaBasketballBall className="text-emerald-400" />
                                    Beyond the Screen
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-gray-700/20 rounded-lg">
                                        <FaDumbbell className="text-3xl text-emerald-400 mb-2" />
                                        <h3 className="font-medium text-gray-300">Strength Training</h3>
                                        <p className="text-sm text-gray-400">5-day split focused on compound lifts</p>
                                    </div>
                                    <div className="p-4 bg-gray-700/20 rounded-lg">
                                        <FaGamepad className="text-3xl text-emerald-400 mb-2" />
                                        <h3 className="font-medium text-gray-300">Gaming</h3>
                                        <p className="text-sm text-gray-400">Lover of competition and exploration</p>
                                    </div>
                                    {/* Updated Fishing Image Section */}
                                    <div className="col-span-2 relative group">
                                        <img
                                            src={fishingPic}
                                            loading="lazy"
                                            alt="Fishing trip on the Outer Banks"
                                            className={`rounded-lg w-full md:h-75 lg:h-96 object-cover aspect-auto transition-all duration-300 ${showFishingImage ? 'blur-none' : 'blur-sm bg-gray-900/50'}`}
                                        />
                                        {!showFishingImage && (
                                            <div className="absolute inset-0 flex items-center justify-center rounded-lg">
                                                <button
                                                    onClick={() => setShowFishingImage(true)}
                                                    className="px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition-colors cursor-grab z-1"
                                                >
                                                    View Fishing Picture
                                                </button>
                                            </div>
                                        )}
                                        <div className={`${showFishingImage ? 'absolute inset-0 bg-gradient-to-t from-gray-900/60 rounded-lg' : 'absolute inset-0 bg-gradient-to-t from-gray-900/60 blur-lg rounded-lg'}`} />
                                    </div>
                                </div>
                            </div>

                            {/* Education */}
                            <div className="p-6 bg-gray-800/30 rounded-xl border border-indigo-500/20">
                                <h2 className="text-xl font-semibold text-indigo-400 mb-6 flex items-center gap-3">
                                    <FaGraduationCap className="text-emerald-400" />
                                    Education & Foundation
                                </h2>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex gap-3">
                                        <span className="text-emerald-400">▹</span>
                                        <div>
                                            <h3 className="font-medium">UNC Wilmington • 2019-2023</h3>
                                            <p className="text-sm text-gray-400"><span className="text-emerald-400">▹</span> B.S. Computer Science – Concentration in Digital Arts</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-emerald-400">▹</span>
                                        <div>
                                            <h3 className="font-medium">Capstone Project</h3>
                                            <p className="text-sm text-gray-400"><span className="text-emerald-400">▹</span> Web Application using Flask</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-emerald-400">▹</span>
                                        <div>
                                            <h3 className="font-medium">Clubs & Activities</h3>
                                            <p className="text-sm text-gray-400"><span className="text-emerald-400">▹</span> Intramural Volleyball</p>
                                            <p className="text-sm text-gray-400"><span className="text-emerald-400">▹</span> UNCWeekends</p>
                                            <p className="text-sm text-gray-400"><span className="text-emerald-400">▹</span> Study Abroad @ UAB Barcelona</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Professional Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            {/* Career Approach */}
                            <div className="p-6 bg-gray-800/30 rounded-xl border border-indigo-500/20">
                                <h2 className="text-xl font-semibold text-indigo-400 mb-6">
                                    Development Principles
                                </h2>
                                <div className="space-y-4 text-gray-300">
                                    <p>
                                        My engineering philosophy centers on:
                                    </p>
                                    <ul className="space-y-3">
                                        <li className="flex gap-2">
                                            <span className="text-emerald-400">▹</span>
                                            <strong>Modular Design:</strong> Reusable, maintainable components
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-emerald-400">▹</span>
                                            <strong>User-Centric:</strong> Solutions that solve real problems
                                        </li>
                                        <li className="flex gap-2">
                                            <span className="text-emerald-400">▹</span>
                                            <strong>Continuous Growth:</strong> Frequently exploring new technologies
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Featured Project */}
                            {loadingProject ? (
                                <div className="p-6 bg-gray-800/30 rounded-xl border border-indigo-500/20">
                                    <div className="animate-pulse space-y-4">
                                        <div className="h-6 bg-gray-700/40 rounded w-1/2"></div>
                                        <div className="h-4 bg-gray-700/40 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-700/40 rounded"></div>
                                    </div>
                                </div>
                            ) : featuredProject && (
                                <div className="p-6 bg-gray-800/30 rounded-xl border border-indigo-500/20">
                                    <h2 className="text-xl font-semibold text-indigo-400 mb-6">
                                        Featured Project
                                    </h2>
                                    <div className="space-y-4">
                                        <h3 className="text-emerald-400 font-medium mb-0">
                                            {featuredProject.projectId}
                                        </h3>
                                        <div className="text-sm text-gray-400 mb-3">
                                            {formatDate(featuredProject.dates[0])} – {formatDate(featuredProject.dates[1])}
                                        </div>
                                        <p className="text-gray-300 text-sm">
                                            {featuredProject.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {featuredProject.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs bg-emerald-500/20 text-emerald-300 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 mt-4">
                                            {featuredProject.githubUrl && (
                                                <a
                                                    href={featuredProject.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-400"
                                                >
                                                    <FaGithub className="inline" />
                                                    Source Code
                                                </a>
                                            )}
                                            {featuredProject.link && (
                                                <a
                                                    href={featuredProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-400"
                                                >
                                                    <FaExternalLinkAlt className="inline" />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}


                            {/* Contact */}
                            <div className="p-6 bg-gray-800/30 rounded-xl border border-indigo-500/20 text-center">
                                <h2 className="text-xl font-semibold text-indigo-400 mb-4">
                                    Get in Touch
                                </h2>
                                <p className="text-gray-300 mb-4 text-left">
                                    Whether you have a project in mind, want to collaborate, or just want to chat, feel free to reach out! I'm always open to new opportunities and connections.
                                </p>
                                <div className="flex gap-4 mt-6">
                                    <a
                                        href="mailto:reynoldstrafton@gmail.com"
                                        className="flex-1 text-center py-2 bg-emerald-500/20 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition-colors"
                                    >
                                        Email
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/traftonreynolds/"
                                        className="flex-1 text-center py-2 bg-emerald-500/20 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div >
            </main >

            <Footer />
        </div >
    );
};

export default About;