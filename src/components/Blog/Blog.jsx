const Blog = ({ blog }) => {

    const { title, cover, author, img, reading_time, date, hashtag } = blog

    return (
        <div className="">
            <img className="mb-8" src={cover} alt="" />
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
                </div>

            </div>
            <h2 className="text-3xl font-bold text-left">{title}</h2>
            <p className="text-left text-gray-700">
                {
                    hashtag.map((hash, idx)=><span key={idx}><a href="">{hash} </a></span>)
                }
            </p>
        </div>
    );
};

export default Blog;