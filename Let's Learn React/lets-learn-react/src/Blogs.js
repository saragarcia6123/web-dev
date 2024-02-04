import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Blogs = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="Blogs">
            {error && <div>{error}</div>}
            {isPending && <h1 className="list-title">Loading Blogs...</h1>}
            {blogs && <BlogList blogs={blogs} title="Blogs" />}
        </div>
    );
};

export default Blogs;