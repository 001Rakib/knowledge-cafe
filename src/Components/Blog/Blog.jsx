import PropTypes from "prop-types";
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
    <div>
      <img src={Cover} alt={`Cover Picture of the title ${Title}`} />
      <div className="flex justify-between">
        <div className="flex">
          <img className="w-14" src={Author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl"> {Author} </h3>
            <p>{Posted_Date}</p>
          </div>
        </div>
        <div>
          <span>{Reading_Time} Min Read</span>
        </div>
      </div>
      <h2 className="text-4xl">{Title}</h2>
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
