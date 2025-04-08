import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../components/Navbar";
import { FaAws, FaMicrosoft, FaJava, FaChartBar, FaDownload, FaFilePdf } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import resume from "../assets/Trafton Reynolds SWE.pdf";
import Footer from "../components/Footer";

const Home = () => (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
        <Navbar />
        <main className="flex-grow w-full flex flex-col justify-center min-h-[calc(100vh-12rem)] overflow-auto">
            <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 w-full text-gray-100">
                {/* Hero Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ marginTop: "6rem" }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-500 to-indigo-400 bg-clip-text text-transparent leading-relaxed">
                        Trafton Reynolds
                    </h1>
                    <div className="text-2xl md:text-3xl text-gray-300">
                        <TypeAnimation
                            sequence={[
                                'Full-Stack Developer',
                                2000,
                                'Data Engineer',
                                2000,
                                'AI & Data Innovator',
                                2000
                            ]}
                            repeat={Infinity}
                        />
                    </div>

                    {/* Resume Download Section */}
                    <motion.div
                        className="flex justify-center gap-4 mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a
                            href={resume}
                            download
                            className="flex items-center gap-2 px-6 py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 rounded-lg transition-colors"
                        >
                            <FaDownload className="text-lg" />
                            Download Resume
                        </a>
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors"
                        >
                            <FaFilePdf className="text-lg" />
                            View Online
                        </a>
                    </motion.div>
                </motion.div>

                {/* Certifications Section */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="text-xl md:text-2xl font-bold text-indigo-400 mb-6">
                        Certifications & Accreditations
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-gray-800/50 rounded-lg border border-indigo-500/20 hover:border-emerald-500/40 transition-colors">
                            <a href="https://www.credly.com/badges/a4902e0f-e392-49ec-98f9-ddbb191b7a35/public_url" target="_blank" rel="noopener noreferrer">
                                <FaAws className="text-2xl text-orange-400 mb-2" />
                                <h3 className="font-semibold">AWS Certified Cloud Practitioner</h3>
                                <p className="text-sm text-gray-400 mt-1">Amazon Web Services</p>
                            </a>
                        </div>

                        <div className="p-4 bg-gray-800/50 rounded-lg border border-indigo-500/20 hover:border-emerald-500/40 transition-colors">
                            <a href="https://learn.microsoft.com/en-us/users/traftonreynolds-8641/credentials/a7de4b59651d0e5c?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
                                <FaMicrosoft className="text-2xl text-blue-400 mb-2" />
                                <h3 className="font-semibold">Azure Data Fundamentals</h3>
                                <p className="text-sm text-gray-400 mt-1">Microsoft</p>
                            </a>
                        </div>

                        <div className="p-4 bg-gray-800/50 rounded-lg border border-indigo-500/20 hover:border-emerald-500/40 transition-colors">
                            <a href="https://credentials.databricks.com/14ea012b-62ff-4104-9166-081788ffcfb7#acc.jbU4IFGP" target="_blank" rel="noopener noreferrer">
                                <SiDatabricks className="text-2xl text-red-400 mb-2" />
                                <h3 className="font-semibold">Associate Developer for Apache Spark 3.0</h3>
                                <p className="text-sm text-gray-400 mt-1">Databricks</p>
                            </a>
                        </div>

                        <div className="p-4 bg-gray-800/50 rounded-lg border border-indigo-500/20 hover:border-emerald-500/40 transition-colors">
                            <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=03CBAD1126BA48C656F1BE2CC92DE20730EE1E3FAD0B27F7C63CF883FE288D02" target="_blank" rel="noopener noreferrer">
                                <FaJava className="text-2xl text-red-600 mb-2" />
                                <h3 className="font-semibold">Java SE 8 Certified Foundations Associate</h3>
                                <p className="text-sm text-gray-400 mt-1">Oracle</p>
                            </a>
                        </div>

                        <div className="p-4 bg-gray-800/50 rounded-lg border border-indigo-500/20 hover:border-emerald-500/40 transition-colors">
                            <a href="https://learn.microsoft.com/en-us/users/traftonreynolds-8641/credentials/7a74132a417bdb42?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
                                <FaMicrosoft className="text-2xl text-blue-400 mb-2" />
                                <h3 className="font-semibold">Azure AI Fundamentals</h3>
                                <p className="text-sm text-gray-400 mt-1">Microsoft</p>
                            </a>
                        </div>

                        <div className="p-4 bg-gray-800/50 rounded-lg border border-indigo-500/20 hover:border-emerald-500/40 transition-colors opacity-75">
                            <a href="https://learn.microsoft.com/en-us/users/traftonreynolds-8641/credentials/89d2e8fc1d0dfd6b?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer">
                                <FaChartBar className="text-2xl text-yellow-400 mb-2" />
                                <h3 className="font-semibold">Power BI Data Analyst Associate <span className="text-xs text-emerald-400">(2024-2025)</span></h3>
                                <p className="text-sm text-gray-400 mt-1">Microsoft</p>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Technical Proficiencies */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                >
                    <div className="p-6 bg-gray-800/30 rounded-xl border border-indigo-500/20">
                        <h3 className="text-xl font-semibold text-indigo-400 mb-6">Technical Proficiencies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Programming Languages */}
                            <div>
                                <h4 className="text-emerald-400 text-sm font-medium mb-3">Programming Languages</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Java
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Python
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        SQL
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        JavaScript/TypeScript
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Dart/Swift
                                    </li>
                                </ul>
                            </div>

                            {/* Cloud & DevOps */}
                            <div>
                                <h4 className="text-emerald-400 text-sm font-medium mb-3">Cloud & DevOps</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        AWS
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Azure
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Google Firebase
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        CI/CD Pipelines
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Docker
                                    </li>
                                </ul>
                            </div>

                            {/* Full Stack Development */}
                            <div>
                                <h4 className="text-emerald-400 text-sm font-medium mb-3">Full Stack Development</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        React + TypeScript
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Spring Boot
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        RESTful API Design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Responsive Web Design
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Testing (Jest, Junit)
                                    </li>
                                </ul>
                            </div>

                            {/* Data Engineering */}
                            <div>
                                <h4 className="text-emerald-400 text-sm font-medium mb-3">Data Engineering</h4>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        ETL/ELT Pipelines
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Apache Spark
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Data Modeling
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Big Data Processing
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="text-emerald-400">▹</span>
                                        Power BI Reporting
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div >
        </main>
        <Footer />
    </div >
);

export default Home;