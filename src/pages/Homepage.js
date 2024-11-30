import React from "react";
import Banner from "./component/Banner";
import AboutUsHome from "./component/AboutUsHome";
import BannerPhoto from "./component/BannerPhoto";
import ShopFor from "./component/ShopFor";
import WhyShopWithUs from "./component/WhyShopWithUs";
import Footer from "./component/Footer";
import Landing from "./component/Landing";

const Homepage = () => {
  return (
    <>
      <Landing />
      <Banner />
      <AboutUsHome />
      <BannerPhoto />
      <ShopFor />
      <WhyShopWithUs />
      <Footer />
    </>
  );
};
export default Homepage;
