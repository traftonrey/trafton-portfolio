import { useEffect, useState } from "react";
import { fetchProjects } from "../utils/api";

interface Project {
    projectId: string;
    description: string;
    technologies: string[];
    dates: string[];
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
        <div className="page-container">
            <h1 className="section-title">Projects</h1>
            {projects.length > 0 ? (
                projects.map((project) => (
                    <div key={project.projectId} className="card">
                        <h2 className="subheading">{project.projectId}</h2>
                        <p className="text-description">{project.description}</p>
                        <p className="text-date">{project.dates.join(" - ")}</p>
                        <p className="tech-stack">
                            <strong>Tech:</strong> {project.technologies.join(", ")}
                        </p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Projects;
