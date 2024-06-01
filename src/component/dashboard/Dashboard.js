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
          <li>
            <NavLink to="/category/create" className="inline-block ">
              Create Category
            </NavLink>
          </li>

          <li>
            <NavLink to="/category" className="inline-block ">
              Read Category
            </NavLink>
          </li>
        </ul>
        <ul>
          <NavLink to="/subcategory" className="inline-block ">
            Sub Category
          </NavLink>
          <li>
            <NavLink to="/subcategory/create" className="inline-block ">
              Create Sub Category
            </NavLink>
          </li>
          <li>
            <NavLink to="/subcategory" className="inline-block ">
              Read Sub Category
            </NavLink>
          </li>
        </ul>
        <ul>
          <NavLink to="/product" className="inline-block ">
            Product
          </NavLink>
          <li>
            <NavLink to="/product/create" className="inline-block ">
              Create Product
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" className="inline-block ">
              Read Product
            </NavLink>
          </li>
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
