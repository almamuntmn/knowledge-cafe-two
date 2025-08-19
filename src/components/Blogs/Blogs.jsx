import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookmark, markAsRead}) => {

    const[blogs, setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            <h2 className="text-2xl"></h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    markAsRead={markAsRead}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;