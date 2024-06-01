import React from "react";

import { NavLink } from "react-router-dom";

import ReadAllCategory from "./ReadAllCategory.js";
const Category = () => {
  return (
    <div className="grid">
      <div className=" flex flex-col  ">
        <NavLink to="/menboot" className="inline-block ">
          Men boot
        </NavLink>
        <NavLink to="/menslipper" className="inline-block">
          Men Slipper
        </NavLink>
      </div>
      <div>
        <ReadAllCategory></ReadAllCategory>
      </div>
    </div>
  );
};

export default Category;
