import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./navbar/Nav.js";
import Men from "./category/Men.js";

const AppLinks = () => {
  return (
    <div>
      <NavLink to="/" style={{ marginRight: "20px" }}>
        <Nav></Nav>
      </NavLink>
      <NavLink to="/Category" style={{ marginRight: "20px" }}>
        <Men></Men>
      </NavLink>
    </div>
  );
};

export default AppLinks;
/*
home=>localhost:5173
contact=>localhost:5173/contact
about=>localhost:5173/about
*/
