const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Dojo</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: 'darkgray',
                    borderRadius: '8px'
                }}>Blogs</a>
            </div>
        </nav>
    );
}
 
export default Navbar