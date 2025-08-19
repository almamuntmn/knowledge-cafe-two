const Bookmark = ({bookmark}) => {
    const { title } = bookmark;
    return (
        <div className="bg-white rounded-lg my-4 p-2">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

export default Bookmark;