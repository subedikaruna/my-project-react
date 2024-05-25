import React from "react";

import { NavLink } from "react-router-dom";
import Boots from "./Boots.js";
const Category = () => {
  return (
    <div className="grid">
      <div className=" flex flex-col  ">
        <NavLink to="/category/menboot" className="inline-block ">
          Men boot
        </NavLink>
        <NavLink to="category/menslipper" className="inline-block">
          Men Slipper
        </NavLink>
      </div>
      <div>
      
        <Boots></Boots>
      </div>
    </div>
  );
};

export default Category;
