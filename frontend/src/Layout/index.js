import React, { useEffect } from "react";

const Layout = ({ title = "Home / Construction", className, Childe }) => {
  useEffect(
    (title) => {
      document.title = title;
    },
    [title]
  );
  return (
    <section title={title} className={className}>
      <div>{Childe}</div>
    </section>
  );
};

export default Layout;
