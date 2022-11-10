import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

import Logo from "../assets/Images/Logo.png";
import NavbarTop from "../Components/NavbarTop";

const Navbar = () => {
  const [Menu, setMenu] = useState(false);
  const handelMenu = () => setMenu(!Menu);

  return (
    <>
      <NavbarTop />
      <nav className="border-b-2 border-[#dddddd50] dark:border-[#fff6f6] dark:bg-[#1b1a1a50] relative">
        <div className="containers">
          <div className="grid grid-cols-3 md:grid-cols-4 items-center p-2">
            <div className="Nav_Logo">
              <NavLink to="/">
                <img
                  className="inline-block cursor-pointer"
                  src={Logo}
                  alt="Logo"
                />
              </NavLink>
            </div>
            <div className="Nav_Menu md:hidden">
              <span className="Nav_Menu_item" onClick={handelMenu}>
                {Menu ? <FaTimes /> : <GiHamburgerMenu />}
              </span>
            </div>
            <div className={Menu ? "nav_bar actives" : "nav_bar"}>
              <ul className="nav_list">
                <li className="nav_item">
                  <NavLink to="/" className="nav_link">
                    Home
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="/Service" className="nav_link">
                    Service
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="/Project" className="nav_link">
                    Project
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="/Contact" className="nav_link">
                    Contact
                  </NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="/Login" className="nav_link">
                    Login
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
