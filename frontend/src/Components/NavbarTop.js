import React, { useState, useEffect } from "react";
import { AiFillPhone, AiOutlineTwitter } from "react-icons/ai";
import { MdEmail, MdLightMode, MdDarkMode } from "react-icons/md";
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const NavbarTop = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-schema: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handlerThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="bg-[#f5f5f5] dark:bg-[#1b1a1a] border-b-2 border-[#dddddd50] dark:border-[#ddd]">
      <div className="containers">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center dark:text-[#ffffff6b]">
          <div className="phone">
            <AiFillPhone className="text-red-500 dark:text-[#f5f5f5a1] ml-1 mr-2 sm:mr-1 text-lg" />
            Phone: +(98) 888 7777
          </div>
          <div className="email">
            <MdEmail className="text-red-500 dark:text-[#f5f5f5a1] ml-2 mr-2 sm:mr-1 text-lg" />
            Email: sample-email@example.com
          </div>

          <div className="social">
            <span className="social_item">
              <BsFacebook className="social_icon" />
            </span>
            <span className="social_item">
              <AiOutlineTwitter className="social_icon" />
            </span>
            <span className="social_item sm:border-r">
              <FaLinkedinIn className="social_icon" />
            </span>

            <div
              className="cursor-pointer w-[34px] ml-4"
              onClick={handlerThemeSwitch}
            >
              {theme === "dark" ? (
                <span className="mode_item">
                  <MdLightMode className="text-white" />
                </span>
              ) : (
                <span className="mode_item">
                  <MdDarkMode />
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavbarTop;
