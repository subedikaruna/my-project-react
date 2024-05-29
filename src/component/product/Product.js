import React from "react";

import { NavLink } from "react-router-dom";

import Combo from "./Combo.js";
const Subcategory = () => {
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
       <Combo></Combo>
      </div>
    </div>
  );
};

export default Subcategory;
