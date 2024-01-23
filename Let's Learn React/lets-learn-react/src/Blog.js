import { useState } from "react";

const Blog = () => {

    //array of 3 objects
    const [blogData, setBlogData] = useState([
        { title: "First Blog", author: "Arthur", preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit...", id: 1 },
        { title: "Second Blog", author: "Bob", preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit...", id: 2 },
        { title: "Third Blog", author: "Chris", preview: "Lorem ipsum dolor sit amet consectetur adipisicing elit...", id: 3 }
    ]);

    return (
        <div className="blog-list">
            {blogData.map((blog) => (
                <div className="blog-item" key={blog.id}>
                    <div className="blog-info">
                        <h2 className="blog-title">{ blog.title }</h2>
                        <span className="blog-author">{ blog.author }</span>
                    </div>
                    <span className="blog-preview">{ blog.preview }</span>
                </div>
            ))}
        </div>
    );
}
 
export default Blog;