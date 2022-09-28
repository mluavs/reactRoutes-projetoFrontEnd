import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from "./pages/Projects/Projects";
import About from './pages/About/About';
import Comments from './pages/Comments/Comments';
import Contact from './pages/Contact/Contact';
import styles from './global.css'

function ApplicationRoutes () {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/comments" element={<Comments />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default ApplicationRoutes