import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <NavLink to="/category/create" className="inline-block ">
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
      </ul>
      <ul>
        <NavLink to="/productdetail" className="inline-block ">
          ProductDetail
        </NavLink>
      </ul>
    </div>
  );
};

export default Dashboard;
