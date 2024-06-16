// src/components/Layout.js
import React from "react";
import { NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
      <div className="flex flex-col space-y-4 bg-white shadow-md rounded-md p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/category"
              className="block p-2 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/create"
              className="block p-2 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              Create Category
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/categoryy"
              className="block p-2 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              Read All Category
            </NavLink>
          </li>
        </ul>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/subcategory"
              className="block p-2 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              Sub Category
            </NavLink>
          </li>
        </ul>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/productt"
              className="block p-2 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              Product
            </NavLink>
          </li>
        </ul>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/image"
              className="block p-2 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              Images
            </NavLink>
          </li>
        </ul>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/productdetail"
              className="block p-2 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              Product Detail
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/productdetail"
              className="block p-2 rounded-md hover:bg-blue-500 hover:text-white"
              activeClassName="bg-blue-500 text-white"
            >
              Read Product Detail
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-span-1 md:col-span-3 bg-white shadow-md rounded-md p-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
