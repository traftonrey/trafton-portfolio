import { useEffect, useState } from "react";
import { fetchProjects } from "../utils/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatDate } from "../utils/formatDate";

interface Project {
    projectId: string;
    description: string;
    technologies: string[];
    dates: string[];
    link?: string;
}

const Projects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const cachedData = localStorage.getItem("projects");
            if (cachedData) {
                const { data, expiry } = JSON.parse(cachedData);
                if (new Date().getTime() < expiry) {
                    setProjects(data);
                    setLoading(false);
                    return;
                } else {
                    localStorage.removeItem("projects"); // Remove expired data
                }
            }

            // Fetch fresh data
            const data = await fetchProjects();
            setProjects(data);
            localStorage.setItem(
                "projects",
                JSON.stringify({
                    data,
                    expiry: new Date().getTime() + 24 * 60 * 60 * 1000, // 24 hours from now
                })
            );
            setLoading(false);
        };

        getData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-10 text-gray-800">
                <h1 className="section-title pt-20 font-bold text-4xl">Projects</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    projects.length > 0 ? (
                        projects.map((project) => (
                            <div key={project.projectId} className="card px-4 py-2 my-4">
                                <h2 className="text-2xl font-bold mb-2">{project.projectId}</h2>
                                <p className="mb-2">{project.description}</p>
                                <p className="mb-2 font-thin">{formatDate(project.dates[0])} - {formatDate(project.dates[1])}</p>
                                {/* only renders link if there is one */}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-amber-700 transition duration-300 ease-in-out mb-2">Check it out!</a>
                                )}
                                <p className="mb-4">
                                    <strong>Tech:</strong> {project.technologies.join(", ")}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No projects found.</p>
                    )
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
