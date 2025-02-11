// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/main.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
// import icon_32 from "./img/web/laptop_32.png";
// import icon_16 from "./img/web/laptop_16.png";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";
import Project from "./pages/Project.jsx";

import ScrollToTop from "./utils/scrollToTop.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
