import Explore from "../components/Explore";
import Discounted from "../components/Discounted";
import Featured from "../components/Featured";
import Highlights from "../components/Highlights";
import Landing from "../components/Landing";
import React from "react";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
