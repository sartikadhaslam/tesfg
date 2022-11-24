import type { NextPage } from "next";
import SecAboutUs from "../components/SecAboutUs";
import SecBanner from "../components/SecBanner";
import SecRegional from "../components/SecRegional";
import NavbarFooterHomeLayout from "../layout/NavbarFooterHomeLayout";

const Home: NextPage = () => {
  return (
    <>
      <NavbarFooterHomeLayout>
        <SecBanner />
        <SecAboutUs />
        <SecRegional />
      </NavbarFooterHomeLayout>
    </>
  );
};

export default Home;
