import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {

    return (
        <div className="w-1/3 mt-8 bg-gray-300 ml-5 p-2 rounded-lg">
            <div>
                <p className="text-xl mb-3">Total Reading Time: {readingTime} minutes</p>
            </div>
            <h2 className="text-2xl bg-blue-300 mb-4 rounded-md py-3 font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;