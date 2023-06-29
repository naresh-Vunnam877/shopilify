import React from "react";
import Layout from "../../Layouts/Layout";
import Hero from "./Hero";
import Offers from "./Offers";
import Features from "./Features";

function Home() {
  return (
    <>
      <Layout children={[<Hero />, <Offers />, <Features />]} />
    </>
  );
}

export default Home;
