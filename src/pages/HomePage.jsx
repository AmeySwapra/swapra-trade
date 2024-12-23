import React from "react";
import Navbar from "../components/Common/Navbar";
import Topbar from "../components/Common/Topbar";
import Carousel from "../components/carousel";
import Footer from "../components/Common/Footer";
import ScrollToTop from "../components/Common/ScrollToTop";
import HomeAbout from "../components/HomeAbout";
import TestimonialSection from "../components/TestimonialSection";
import ImageCarousel from "../components/ImageCarousel";
import HomeCoures from "../components/HomeCoures";

function HomePage() {
  return (
    <>
    <ScrollToTop/>
      <Topbar />
      <Navbar />
      <Carousel/>
      <HomeAbout/>
      <HomeCoures/>
      <TestimonialSection/>
      <ImageCarousel/>
      <Footer/>
    </>
  );
}

export default HomePage;
