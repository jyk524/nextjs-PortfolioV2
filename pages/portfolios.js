import BaseLayout from "../components/layouts/BaseLayout";
import axios from "axios";

const Portfolios = () => {
  return (
    <BaseLayout>
      <h1>Portfolios h1</h1>
    </BaseLayout>
  );
};

export default Portfolios;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
