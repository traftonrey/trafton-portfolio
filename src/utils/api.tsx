import axios from "axios";

// const API_EXPERIENCE = import.meta.env.VITE_API_EXPERIENCE;
// const API_PROJECTS = import.meta.env.VITE_API_PROJECTS;

const API_EXPERIENCE = "https://wwtedi2wrk.execute-api.us-east-1.amazonaws.com/dev/experience"
const API_PROJECTS = "https://wwtedi2wrk.execute-api.us-east-1.amazonaws.com/dev/projects"

export const fetchExperience = async () => {
    try {
        const response = await axios.get(API_EXPERIENCE);
        return JSON.parse(response.data.body);
    } catch (error) {
        console.error("Error fetching experience:", error);
        return [];
    }
};

export const fetchProjects = async () => {
    try {
        const response = await axios.get(API_PROJECTS);
        return JSON.parse(response.data.body);
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};
