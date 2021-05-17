import BaseLayout from "../../components/layouts/BaseLayout";
import { useRouter } from "next/router";
import axios from "axios";

const Portfolio = ({ post }) => {
  const router = useRouter();
  return (
    <BaseLayout>
      <h1>Portfolio Page</h1>
      <h1>{post.title}</h1>
      <p>BODY: {post.body}</p>
      <p>ID: {post.id}</p>
    </BaseLayout>
  );
};

Portfolio.getInitialProps = async ({ query }) => {
  let post = {};

  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    post = res.data;
  } catch (e) {
    console.error(e);
  }

  return { post };
};

export default Portfolio;
