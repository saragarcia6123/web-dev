const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <a className="nav-item" href="/">Home</a>
                <a className="nav-item" href="/blog">Blog</a>
                <a className="nav-item create-button button" href="/create">Create</a>
            </div>
        </nav>
    );
}
 
export default Navbar