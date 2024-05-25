import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateCategory from "../category/CreateCategory.js";
import Category from "../category/Category.js";
import Nav from "../navbar/Nav.js";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Nav></Nav>}></Route> */}
        <Route path="/Category" element={<Category></Category>}></Route>
        <Route
          path="/category/create"
          element={<CreateCategory></CreateCategory>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
