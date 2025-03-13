import { describe, it, expect } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchExperience, fetchProjects } from './api';

// Create a new mock instance for Axios
const mock = new MockAdapter(axios);

describe('fetchExperience', () => {
    it('should fetch and return experience data', async () => {
        const mockData = {
            body: JSON.stringify([
                {
                    jobId: '1',
                    jobTitle: 'Software Engineer',
                    description: 'Worked on backend services.',
                },
            ]),
        };

        mock.onGet(import.meta.env.VITE_API_EXPERIENCE).reply(200, mockData);

        const result = await fetchExperience();
        expect(result).toEqual([
            {
                jobId: '1',
                jobTitle: 'Software Engineer',
                description: 'Worked on backend services.',
            },
        ]);
    });

    it('should return an empty array on error', async () => {
        mock.onGet(import.meta.env.VITE_API_EXPERIENCE).reply(500);

        const result = await fetchExperience();
        expect(result).toEqual([]);
    });
});

describe('fetchProjects', () => {
    it('should fetch and return project data', async () => {
        const mockData = {
            body: JSON.stringify([
                {
                    projectId: '1',
                    description: 'A web application built with React.',
                    technologies: ['React', 'Node.js', 'AWS'],
                },
            ]),
        };

        mock.onGet(import.meta.env.VITE_API_PROJECTS).reply(200, mockData);

        const result = await fetchProjects();
        expect(result).toEqual([
            {
                projectId: '1',
                description: 'A web application built with React.',
                technologies: ['React', 'Node.js', 'AWS'],
            },
        ]);
    });

    it('should return an empty array on error', async () => {
        mock.onGet(import.meta.env.VITE_API_PROJECTS).reply(500);

        const result = await fetchProjects();
        expect(result).toEqual([]);
    });
});
