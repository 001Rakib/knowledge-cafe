import PropTypes from "prop-types";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
const Blog = ({ blog }) => {
  const {
    Title,
    Cover,
    Reading_Time,
    Author_img,
    Author,
    Posted_Date,
    Hashtags,
  } = blog;
  console.log(blog);
  return (
    <div className="mb-20">
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
          <button className="ml-2 text-blue-700 text-xl">
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
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
