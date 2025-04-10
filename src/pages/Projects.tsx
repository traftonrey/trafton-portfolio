import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchProjects } from "../utils/api"; // Now used
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatDate } from "../utils/formatDate";
import { parseDate } from "../utils/parseDate";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

interface Project {
    projectId: string;
    description: string;
    technologies: string[];
    dates: string[];
    githubUrl?: string;
    link?: string;
    technicalDetails?: {
        title: string
        description: string
    }[];
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedProjectID, setExpandedProjectID] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const cachedData = localStorage.getItem("projects");

                if (cachedData) {
                    const { data, expiry } = JSON.parse(cachedData);
                    if (Date.now() < expiry) {
                        const sortedData = [...data].sort((a, b) => parseDate(b.dates[1]).getTime() - parseDate(a.dates[1]).getTime());
                        setProjects(sortedData);
                        setLoading(false);
                        return;
                    }
                }

                // Fetch and set fresh data
                const freshData = await fetchProjects();
                const sortedData = [...freshData].sort((a, b) => parseDate(b.dates[1]).getTime() - parseDate(a.dates[1]).getTime());
                setProjects(sortedData);
                localStorage.setItem(
                    "projects",
                    JSON.stringify({
                        data: freshData,
                        expiry: Date.now() + 24 * 60 * 60 * 1000,
                    })
                );
            } catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <Navbar />
            <div className="w-full min-h-screen flex flex-col items-center pt-32 px-4 md:px-8 text-gray-100">
                <motion.h1
                    className="text-4xl md:text-5xl font-semibold mb-12 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Development Projects
                </motion.h1>

                {loading ? (
                    <div className="flex items-center justify-center h-32">
                        <div className="animate-ping h-4 w-4 bg-amber-400 rounded-full"></div>
                    </div>
                ) : projects.length > 0 ? (
                    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.projectId}
                                className="group relative bg-gray-800/50 rounded-xl p-6 shadow-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.15, type: "spring" }}
                                whileHover={{
                                    y: -5,
                                    boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.15)"
                                }}
                            >
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-2xl font-bold text-amber-400">
                                        {project.projectId}
                                    </h2>
                                    <div className="flex gap-2">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 transition"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaGithub className="text-amber-400" />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a
                                                href={project.link}
                                                className="p-2 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 transition"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <FaExternalLinkAlt className="text-amber-400" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Dates */}
                                <div className="mb-4 flex items-center text-sm text-amber-300">
                                    <span className="mr-2">🕒</span>
                                    {formatDate(project.dates[0], true)} – {formatDate(project.dates[1], true)}
                                </div>

                                {/* Tech */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-sm hover:bg-amber-500/20 transition cursor-auto"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Expandable Technical Details */}
                                {project.technicalDetails && (
                                    <div className="mt-4">
                                        <button
                                            onClick={() => setExpandedProjectID(
                                                expandedProjectID === project.projectId ? null : project.projectId
                                            )}
                                            className="text-amber-400 hover:text-amber-300 w-full text-left flex items-center gap-2"
                                        >
                                            <FaCode className="flex-shrink-0" />
                                            <span className="cursor-pointer">
                                                {expandedProjectID === project.projectId
                                                    ? "Hide Technical Details"
                                                    : "Show Technical Details"}
                                            </span>
                                        </button>

                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: expandedProjectID === project.projectId ? 1 : 0,
                                                height: expandedProjectID === project.projectId ? 'auto' : 0
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-4 space-y-3">
                                                {project.technicalDetails.map((detail, index) => (
                                                    <div key={index} className="p-3 bg-gray-800/30 rounded-lg">
                                                        <div className="text-sm font-medium text-amber-300">
                                                            {detail.title}
                                                        </div>
                                                        <p className="text-gray-300 text-sm mt-1">
                                                            {detail.description}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400 text-lg">No projects found.</p>
                )}
            </div>
            <div className="p-6"></div>
            <Footer />
        </div>
    );
};

export default Projects;