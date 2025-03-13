import { Link } from "react-router-dom";

const Home = () => (
    <div className="page-container text-center">
        <h1 className="section-title">Trafton Reynolds II</h1>
        <p className="text-description">Software Developer / Data Engineer</p>
        <p className="text-gray-700 mt-2">
            Experienced in building scalable applications, optimizing data workflows, and AI-powered solutions.
            Passionate about continuous learning and solving complex technical challenges.
        </p>

        <div className="mt-6">
            <h2 className="subheading">Skills</h2>
            <ul className="text-description">
                <li>✔ Full-Stack Development</li>
                <li>✔ Cloud Computing (AWS, Azure)</li>
                <li>✔ RESTful APIs & Microservices (MVC)</li>
                <li>✔ Containerization (Docker)</li>
                <li>✔ Database Management (SQL, NoSQL)</li>
                <li>✔ Front-End Frameworks (React.js, Vite, TypeScript)</li>
                <li>✔ CI/CD Pipelines & DevOps</li>
            </ul>
        </div>

        <div className="mt-6">
            <h2 className="subheading">Experience</h2>
            <p className="text-description">Worked at PwC and SkillStorm on Generative AI solutions, web development, and data engineering projects.</p>
        </div>

        <div className="mt-6">
            <h2 className="subheading">Education</h2>
            <p className="text-description">B.S. in Computer Science, University of North Carolina Wilmington (2019 - 2023)</p>
        </div>

        <div className="mt-6">
            <h2 className="subheading">Certifications</h2>
            <ul className="text-description">
                <li>✔ AWS Certified Cloud Practitioner</li>
                <li>✔ Azure Data Fundamentals</li>
                <li>✔ Databricks Certified Associate Developer for Apache Spark</li>
                <li>✔ Java SE 8 Certified Foundations Associate</li>
                <li>✔ Microsoft Certified: Azure AI Fundamentals</li>
                <li>✔ Microsoft Certified: Power BI Data Analyst Associate</li>
            </ul>
        </div>

        <div className="mt-6">
            <h2 className="subheading">Contact</h2>
            <p className="text-description">📧 reynoldstrafton@gmail.com | 📍 Clearwater, FL</p>
            <p className="text-description">
                <a href="https://www.linkedin.com/in/traftonreynolds/" className="text-blue-500">LinkedIn Profile</a>
            </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
            <Link to="/experience" className="text-blue-600 underline">Experience</Link>
            <Link to="/projects" className="text-blue-600 underline">Projects</Link>
        </div>
    </div>
);

export default Home;
