import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

//
const Portfolios = ({ posts }) => {
  // map through fetched posts
  const renderPosts = () => {
    return posts.map((post) => <li key={post.id}>{post.title}</li>);
  };
  return (
    <BaseLayout>
      <h1>Portfolios h1</h1>
      <ul>{renderPosts()}</ul>
    </BaseLayout>
  );
};
// Pull Posts
Portfolios.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (e) {
    console.error(e);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolios;
