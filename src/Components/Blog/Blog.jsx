import PropTypes from "prop-types";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    Title,
    Cover,
    Reading_Time,
    Author_img,
    Author,
    Posted_Date,
    Hashtags,
    ID,
  } = blog;

  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8 rounded-md"
        src={Cover}
        alt={`Cover Picture of the title ${Title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex">
          <img className="w-14" src={Author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl"> {Author} </h3>
            <p>{Posted_Date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{Reading_Time} Min Read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-blue-700 text-xl"
          >
            <BsFillBookmarkHeartFill></BsFillBookmarkHeartFill>
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-2">{Title}</h2>
      <p>
        {Hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href=""> {hash} </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(Reading_Time, ID)}
        className="text-blue-700 underline font-bold"
      >
        Mark As Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blog;
