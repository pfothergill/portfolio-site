import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import './styles/style.scss';

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<Faq />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App;
