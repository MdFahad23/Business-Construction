import React, { useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title = "BUILDING / CONSTRUCTION", className, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <main>
      <Navbar />
      <section>
        <div className={className}>{children}</div>
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
