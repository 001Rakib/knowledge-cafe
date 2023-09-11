import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <>
      <div className="md:w-1/3 bg-gray-300 ml-4 mt-16">
        <div>
          <h3 className="text-2xl text-center bg-gray-400 py-6">
            Spent time on read : {readingTime} min
          </h3>
        </div>
        <h2 className="text-3xl text-center mt-4">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};
export default Bookmarks;
