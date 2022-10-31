import React from "react";
import { Router, Route } from "react-router-dom";

import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Router></Router>
      <Footer />
    </>
  );
};

export default Index;
