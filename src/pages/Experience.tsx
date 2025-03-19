import { useEffect, useState } from "react";
import { fetchExperience } from "../utils/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { formatDate } from "../utils/formatDate";

interface ExperienceItem {
    jobId: string;
    description: string;
    dates: string[];
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
        <div>
            <Navbar />
            <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center pt-10 text-gray-800">
                <h1 className="section-title pt-20 font-bold text-4xl">Work Experience</h1>
                {experience.length > 0 ? (
                    experience.map((job) => {
                        // Check if the description is formatted as a list
                        const isList = job.description.trim().startsWith("-");
                        const descriptionItems = job.description.split(/- \s*/).filter(Boolean);

                        return (
                            <div key={job.jobId} className="card px-4 py-2 my-4">
                                <h2 className="text-2xl font-bold mb-2">
                                    {job.jobTitle} @ {job.jobId}
                                </h2>
                                {/* Render as list if it starts with a hyphen */}
                                {isList ? (
                                    <ul className="list-disc list-inside mb-2">
                                        {descriptionItems.map((item, index) => (
                                            <li key={index}>{item.trim()}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="mb-2">{job.description}</p>
                                )}
                                <p className="mb-2 font-thin">
                                    {formatDate(job.dates[0])} - {formatDate(job.dates[1])}
                                </p>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Experience;
