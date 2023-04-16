import React from "react";

import Header from "./banner/Banner";
import Footer from "./footer/Footer";
import Banner from "./header/Header";
import Main from "./main/Main";

const Home = () => {
  return (
    <>
      <section>
        <Banner />
        <Header />
        <Main />
        <Footer />
      </section>
    </>
  );
};

export default Home;
