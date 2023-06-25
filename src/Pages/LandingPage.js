import React from "react";
// import Navsection from "./Navsection";
import RestrauntsDescription from "./RestrauntsDescription";
import FoodCatagories from "./FoodCatagories";
import Instructions from "./Instructions";
import Testomony from "./Testomony";
import FavDeshsCard from "./FavDeshsCard";
import RecentArticles from "./RecentArticles";
// import Footer from "./Footer";
import BackgroundImage from "./BackgroundImage";

const LandingPage = () => {
  return (
    <>
      {/* <Navsection /> */}
      <BackgroundImage />
      <RestrauntsDescription />
      <br />
      <FoodCatagories />
      <Instructions />
      <Testomony />
      <FavDeshsCard />
      <RecentArticles />
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
