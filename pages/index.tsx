import type { NextPage } from "next";
import SecRegional from "../components/SecRegional";
import SecPartners from "../components/SecPartners";

const Home: NextPage = () => {
  return (
    <>
        <SecRegional />
        <SecPartners />
    </>
  );
};

export default Home;