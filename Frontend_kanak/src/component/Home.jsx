import React from "react";
import Navbar from "./Navbar";
import DnDFlow from "./DnDFlow";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ height: "100vh" }}>
        <DnDFlow />
      </div>
    </div>
  );
};

export default Home;
