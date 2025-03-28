import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// css
import "./styles/index.css";

// components
import LoadingSpinner from "./components/LoadingSpinner"
import Home from "./pages/Home";

const Projects = React.lazy(() => import("./pages/Projects"));
const Experience = React.lazy(() => import("./pages/Experience"));
const About = React.lazy(() => import("./pages/About"));

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={
          <Suspense fallback={<LoadingSpinner />}> <Experience /></Suspense>
        } />
        <Route path="/projects" element={
          <Suspense fallback={<LoadingSpinner />}> <Projects /></Suspense>
        } />
        <Route path="/about-me" element={
          <Suspense fallback={<LoadingSpinner />}> <About /></Suspense>
        } />
      </Routes>
    </div>
  </Router>
);

export default App;
