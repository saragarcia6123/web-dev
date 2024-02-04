import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {

    if (blogs.length === 0) {
        return (
            <div className="container">
                <h3>No blogs to show</h3>
            </div>
        );
    } else {
        return (
            <div className="container">
                <h2 className="list-title">{title}</h2>
                <div className="blog-list">
                    {blogs.map((blog) => (
                        <Link to={`/blogs/${blog.id}`} className="blog-item" key={blog.id}>
                            <div className="header-container blog-info">
                                <h2 className="blog-title">{blog.title}</h2>
                                <span className="blog-author">{blog.author}</span>
                            </div>
                            <div className="middle-container">
                                <span className="blog-preview">{blog.body}</span>
                                <span className="blog-date">{blog.date}</span>
                            </div>
                            <div className="footer-container">
                                <button className="button edit-button">Edit</button>
                                <button className="button delete-button">Delete</button>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        );
    }
};

export default BlogList;