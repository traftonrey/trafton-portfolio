import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { fetchExperience } from "../utils/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatDate } from "../utils/formatDate";
import { parseDate } from "../utils/parseDate";

interface ExperienceItem {
    jobId: string;
    description: string;
    dates: string[];
    jobTitle: string;
    projects: string[][][];
}

const Experience = () => {
    const [experience, setExperience] = useState<ExperienceItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const cachedData = localStorage.getItem("experience");
            if (cachedData) {
                const { data, expiry } = JSON.parse(cachedData);
                if (new Date().getTime() < expiry) {
                    // Sort before setting state
                    setExperience([...data].sort((a, b) => parseDate(b.dates[1]).getTime() - parseDate(a.dates[1]).getTime()));
                    setLoading(false);
                    return;
                } else {
                    localStorage.removeItem("experience"); // Remove expired data
                }
            }

            // Fetch fresh data
            const data = await fetchExperience();

            // Sort before setting state
            const sortedData = [...data].sort((a, b) => parseDate(b.dates[1]).getTime() - parseDate(a.dates[1]).getTime());

            setExperience(sortedData);
            localStorage.setItem(
                "experience",
                JSON.stringify({
                    data: sortedData, // Store sorted data in localStorage
                    expiry: new Date().getTime() + 24 * 60 * 60 * 1000, // 24 hours
                })
            );
            setLoading(false);
        };
        getData();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            <Navbar />
            <div className="w-full min-h-screen flex flex-col items-center pt-10 px-4 md:px-10 text-gray-100">
                <h1 className="pt-24 mb-12 font-bold text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-relaxed">
                    Work Experience
                </h1>

                {loading ? (
                    <div className="flex items-center justify-center h-32">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                ) : experience.length > 0 ? (
                    <motion.div
                        className="w-full max-w-4xl space-y-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {experience.map((job, index) => {
                            const isList = job.description.trim().startsWith("-");
                            const descriptionItems = job.description.split(/- \s*/).filter(Boolean);

                            return (
                                <motion.div
                                    key={job.jobId}
                                    className="group relative p-6 bg-gray-800/50 rounded-xl shadow-2xl border border-gray-700 hover:border-purple-500/50 transition-all"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        boxShadow: "0 20px 40px -10px rgba(99, 102, 241, 0.2)"
                                    }}
                                >
                                    {/* Title & Date Row */}
                                    <div className="flex justify-between items-start mb-6 flex-nowrap">
                                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pr-4">
                                            {job.jobTitle} @ {job.jobId}
                                        </h2>
                                        <motion.div
                                            className="px-3 py-1 rounded-full bg-purple-500/30 text-purple-100 text-sm whitespace-nowrap shrink-0"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {formatDate(job.dates[0], true)} – {formatDate(job.dates[1], true)}
                                        </motion.div>
                                    </div>

                                    {/* Description List */}
                                    {isList ? (
                                        <ul className="space-y-3">
                                            {descriptionItems.map((item, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    className="pl-4 border-l-2 border-purple-400/30 hover:border-purple-400/60 transition-colors"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: idx * 0.1,
                                                        type: "spring"
                                                    }}
                                                >
                                                    <span className="text-purple-400 mr-2">▹</span>
                                                    <span className="text-gray-300">{item.trim()}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-300">{job.description}</p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                ) : (
                    <p className="text-gray-400 text-lg">No work experience found.</p>
                )}
            </div>
            <div className="p-6"></div>
            <Footer />
        </div>
    );
};

export default Experience;