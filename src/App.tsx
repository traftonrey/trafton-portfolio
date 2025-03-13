import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import "./styles/index.css"; // Import global styles

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
