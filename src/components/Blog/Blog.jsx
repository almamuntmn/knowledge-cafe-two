import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, markAsRead }) => {

    const { title, cover, author, img, reading_time, date, hashtag } = blog

    return (
        <div className="">
            <img className="my-8 rounded-xl" src={cover} alt="" />
            <hr />
            <div className="flex justify-between mt-3">
                <div className="flex gap-3 mb-2 items-center">
                    <img className="rounded-full w-12 h-12" src={img} alt="" />
                    <div className="text-left">
                        <h1 className="text-2xl font-bold">{author}</h1>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className="ml-2"
                    ><FaRegBookmark></FaRegBookmark></button>
                </div>

            </div>
            <h2 className="text-3xl font-bold text-left my-4">{title}</h2>
            <p className="text-left text-gray-700">
                {
                    hashtag.map((hash, idx)=><span key={idx}><a href="">{hash} </a></span>)
                }
            </p>
            <button className="block text-left text-purple-500 underline" onClick={() => markAsRead(reading_time)}>Mark as Read</button>
        </div>
    );
};

export default Blog;