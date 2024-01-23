import { useState } from "react";

const Home = () => {

    const themes = ['Light', 'Dark']

    const [theme, setTheme] = useState(themes[0]);

    const changeTheme = () => {
        var element = document.body;
        element.classList.toggle("dark-mode");
        const n = (theme === themes[0]) ? 1 : 0
        setTheme(themes[n])
    }

    return (
        <div className="content">
            <button className="btn" onClick={ changeTheme }>Toggle {theme} Mode</button>
        </div>
    );
};

export default Home;