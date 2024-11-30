import React from "react";
import { useAuth } from "../hooks/AuthProvider";
import Banner from "./component/Banner";
import AboutUsHome from "./component/AboutUsHome";
import BannerPhoto from "./component/BannerPhoto";
import ShopFor from "./component/ShopFor";
import WhyShopWithUs from "./component/WhyShopWithUs";
import Footer from "./component/Footer";
import Landing from "./component/Landing";

const Homepage = () => {
  const { user } = useAuth();

  return (
    <>
      {/* <h1>HELLO {user?.username}</h1> */}
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
