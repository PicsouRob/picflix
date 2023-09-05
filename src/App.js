import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './index.css';
import Home from "./pages/Home.jsx";
import Categories from "./pages/Categories.jsx";
import AddVideos from "./pages/AddVideos.jsx";
import Footer from "./components/Footer.jsx";
import EditCategory from './pages/EditCategory';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-videos" element={<AddVideos />} />
                <Route path="/add-categories" element={<Categories />} />
                <Route path="/edit-category/:id" element={<EditCategory />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;