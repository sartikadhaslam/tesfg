import type { NextPage } from "next";

import SecRegional from "../components/SecRegional";
import SecPartners from "../components/SecPartners";
import NavbarFooterHomeLayout from "../layout/NavbarFooterHomeLayout";
import SecBanner from "../components/SecBanner";
import SecAboutUs from "../components/SecAboutUs";


const Home: NextPage = () => {
  return (
    <>
    <NavbarFooterHomeLayout>
      <SecBanner/>
      <SecAboutUs />
      <SecRegional />
      <SecPartners />
    </NavbarFooterHomeLayout>
    </>
  );
};

export default Home;