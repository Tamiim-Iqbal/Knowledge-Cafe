import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddBookmark, handleMarkRead}) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 mt-7">
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddBookmark={handleAddBookmark}
                    handleMarkRead={handleMarkRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired
}

export default Blogs;