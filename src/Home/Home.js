import React from "react";
import "./Home.css";
import Hero from "../Components/Hero";
import Whyus from "../Components/WhyUs";
import AboutUs from "../Components/AboutUs";
import Services from "../Components/test";
import Review from "../Components/Reviews";
import ContactUs from "../Components/Contactus";

function Home(props) {
  return (
    <>
      {/* <NavBar /> */}
      <div className="overflow-hidden">
        <div className="md:px-[50px] text-[#212D45] px-[20px] justify-center ">
          <Hero />
          <Whyus />
          <AboutUs />
        </div>
        <Services />
        <Review />
        <ContactUs />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
