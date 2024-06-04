import React from "react";
import { NavLink } from "react-router-dom";
import ReadAllProduct from "../product/ReadAllProduct";

const Dashboard = () => {
  return (
    <div className="grid">
      <div className=" flex flex-col  ">
        <ul>
          <NavLink to="/category" className="inline-block ">
            Category
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/subcategory" className="inline-block ">
            Sub Category
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/productt" className="inline-block ">
            Product
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/image" className="inline-block ">
            Images
          </NavLink>
          <li>
            <NavLink to="/image/create" className="inline-block ">
              Create Images
            </NavLink>
          </li>
          <li>
            <NavLink to="/image" className="inline-block ">
              Read All Images
            </NavLink>
          </li>
        </ul>
        <ul>
          <NavLink to="/productdetail" className="inline-block ">
            ProductDetail
          </NavLink>
          <li>
            <NavLink to="/productdetail/create" className="inline-block ">
              Create Product Detail
            </NavLink>
          </li>
          <li>
            <NavLink to="/productdetail/" className="inline-block ">
              Read Product Detail
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ReadAllProduct></ReadAllProduct>
      </div>
    </div>
  );
};

export default Dashboard;
