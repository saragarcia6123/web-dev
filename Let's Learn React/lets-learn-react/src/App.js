// App.js
import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Create from "./Create";
import BlogPost from "./BlogPost";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/create" element={<Create />} />
                        <Route path="/blogs/:id" element={<BlogPost />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;