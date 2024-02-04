// BlogPost.js
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Fragment } from "react";

const BlogPost = () => {
    const { id } = useParams();
    const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

    return (
        <div className="BlogPost">
            {error && <div>{error}</div>}
            {isPending && <h1 className="list-title">Loading Blog...</h1>}
            {blog && (
                <Fragment>
                    <div className="content">
                        <div className="header-container">
                            <div className="header-title">
                                <h2 className="blog-title">{blog.title}</h2>
                            </div>
                            <div className="header-info">
                                <span className="blog-author">{blog.author}</span>
                                <span className="blog-date">{blog.date}</span>
                            </div>
                        </div>
                        <div className="middle-container">
                            <p className="blog-body">{blog.body}</p>
                        </div>
                    </div>
                    <div className="post-footer">
                            <button className="button edit-button">Edit</button>
                            <button className="button delete-button">Delete</button>
                    </div>
                </Fragment>
                
            )}
        </div>
    );
};

export default BlogPost;