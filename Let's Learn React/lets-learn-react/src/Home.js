import BlogList from "./BlogList";
import useFetch from "./useFetch"

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div className="container"><h1 className="loading-message">Loading...</h1></div>}
            {blogs && <BlogList blogs={blogs} title="Blogs"/>}
        </div>
    );
};

export default Home;