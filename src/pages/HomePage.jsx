import React from "react";
import Navbar from "../components/Common/Navbar";
import Topbar from "../components/Common/Topbar";
import Carousel from "../components/carousel";
import Footer from "../components/Common/Footer";

function HomePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Carousel/>
      <Footer/>
    </>
  );
}

export default HomePage;
