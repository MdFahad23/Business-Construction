import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Layout from "../Layout/index";

const Home = () => {
  return (
    <Layout title="Home / Construction" className="Hero_Section">
      <div className="containers">
        <motion.div
          className="hero_content"
          animate={{ x: [-200, 100, 0] }}
          transition={{ duration: 2 }}
        >
          <h1 className="hero_heading">BEST QUALITY STEEL FOR CONSTRUCTION</h1>
          <p className="hero_pra">
            Marris mattis auctor cursus.phasellus tellus,imperdiet ut imperdier
            eu,iaculs a sem
          </p>
          <Link className="hero_btn" to="/">
            WORK WITH US
          </Link>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;
