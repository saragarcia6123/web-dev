import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="nav-content logo">Dojo Blog</h1>
            <div className="nav-content links">
                <Link to="/home" className="nav-item">Home</Link>
                <Link to="/blogs" className="nav-item">Blog</Link>
                <Link to="/create" className="nav-item create-button button">Create</Link>
            </div>
        </nav>
    );
};

export default Navbar;