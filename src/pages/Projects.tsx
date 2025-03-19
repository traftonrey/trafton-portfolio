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

    useEffect(() => {
        const getData = async () => {
            const data = await fetchProjects();
            setProjects(data);
        };
        getData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-10 text-gray-800">
                <h1 className="section-title pt-20 font-bold text-4xl">Projects</h1>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div key={project.projectId} className="card px-4 py-2 my-4">
                            <h2 className="text-2xl font-bold mb-2">{project.projectId}</h2>
                            <p className="mb-2">{project.description}</p>
                            <p className="mb-2 font-thin">{formatDate(project.dates[0])} - {formatDate(project.dates[1])}</p>
                            {/* only renders link if there is one */}
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="link mb-2">Check it out!</a>
                            )}
                            <p className="mb-4">
                                <strong>Tech:</strong> {project.technologies.join(", ")}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Projects;
