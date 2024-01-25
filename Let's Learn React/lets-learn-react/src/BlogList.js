const BlogList = ({blogs, title, handleDelete, filterByAuthor}) => {

    const getPreview = (blog) => {
        var str = blog.body.substring(0,80)
        var lastIndex = str.lastIndexOf(" ");
        str = str.substring(0, lastIndex);
        var lastChar = str.substring(str.length-1)
        if (lastChar === ",") {
            str = str.substring(0, str.length-1)
        }
        return str  + "..."
    }

    if (blogs.length === 0) {
        return (
            <div className="container">
                <h3>No blogs to show</h3>
            </div>
        )
    } else {
        return (
        <div className="container">
            <h2 className="list-title">{title}</h2>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <div className="blog-item" key={ blog.id }>
                        <div className="header-container blog-info">
                            <h2 className="blog-title">{ blog.title }</h2>
                            <span className="blog-author">{ blog.author }</span>
                        </div>
                        <span className="blog-preview">{ getPreview(blog) }</span>
                        <div className="footer-container">
                            <button className="button edit-button">Edit</button>
                            <button className="button delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    }
    
}
 
export default BlogList;