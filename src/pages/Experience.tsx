import { useEffect, useState } from "react";
import { fetchExperience } from "../utils/api";

interface ExperienceItem {
    jobId: string;
    description: string;
    Dates: string[];
    jobTitle: string;
    projects: string[][][];
}

const Experience = () => {
    const [experience, setExperience] = useState<ExperienceItem[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchExperience();
            setExperience(data);
        };
        getData();
    }, []);

    return (
        <div className="page-container">
            <h1 className="section-title">Work Experience</h1>
            {experience.length > 0 ? (
                experience.map((job) => (
                    <div key={job.jobId} className="card">
                        <h2 className="subheading">
                            {job.jobTitle} @ {job.jobId}
                        </h2>
                        <p className="text-description">{job.description}</p>
                        <p className="text-date">
                            {job.Dates[0]} - {job.Dates[1]}
                        </p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Experience;
