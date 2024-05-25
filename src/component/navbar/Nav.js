import React from "react";
import Home from "../home/Home.js";
import Category from "../category/Category.js";
import Men from "../category/Men.js";
import Women from "../category/Women.js";

const Nav = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="nab">
        <img src="./download.jpg" alt="" />
      </div>
      <div>
        <Home></Home>
      </div>
      <div>
        <Men></Men>
      </div>
      <div>
        <Women></Women>
      </div>
    </div>
  );
};

export default Nav;
