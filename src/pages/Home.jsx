import React from "react";
// import Blog from "../Components/Blog";
import CounterSection from "../components/CounterSection";
// import About from "../Components/About";
// import Projects from "../Components/Projects";
import Products from "../components/Products";
// import nlid from "../videos/document_5888497005738596081.mp4";
// import Reviews from "../Components/Reviews"
// import HeroSwiper from "../Components/HeroSwiper"
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div>
      {/* <HeroSwiper /> */}
<Hero />
      <CounterSection />
      {/* <About /> */}
      <Products />

      {/* <div className="px-6 mt-14 h-auto bg-black  md:px-12 lg:px-24">
        {" "}
        <video
          className="w-full h-64 md:h-80"
          src={nlid}
          controls
          autoPlay></video>
      </div> */}
      {/* <Blog /> */}
      {/* <Reviews /> */}
    </div>
  );
};

export default Home;
