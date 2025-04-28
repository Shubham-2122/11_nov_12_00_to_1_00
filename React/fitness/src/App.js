import React from "react";
import Home from "./Website/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Website/Pages/About";
import Course from "./Website/Pages/Course";
import Blogs from "./Website/Pages/Blogs";
import Feature from "./Website/Pages/Feature";
import Team from "./Website/Pages/Team";
import Testimonial from "./Website/Pages/Testimonial";
import Notfound from "./Website/Pages/Notfound";
import Contact from "./Website/Pages/Contact";
import Dashboard from "./Admin/Apages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/team" element={<Team />} />
          <Route path="/test" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />

          {/* not found */}
          <Route path="*" element={<Notfound />} />

          {/* admin */}
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
