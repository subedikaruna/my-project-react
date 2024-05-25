import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../component/navbar/Nav.js";
const AppLinks = () => {
  return (
    <div>
      <div className=" flex justify-between items-center ">
        <NavLink to="/" className="inline-block text-center">
          <Nav></Nav>
        </NavLink>
        <NavLink to="/" className="inline-block text-center">
          Home
        </NavLink>
        <NavLink to="/men" className="inline-block text-center">
          Men
        </NavLink>
        <NavLink to="/women" className="inline-block text-center">
          Women
        </NavLink>
      </div>
    </div>
  );
};

export default AppLinks;
/*
home=>localhost:5173
contact=>localhost:5173/contact
about=>localhost:5173/about
*/
