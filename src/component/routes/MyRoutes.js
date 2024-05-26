import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../home/Home.js";
import Men from "../category/Men.js";
import Women from "../category/Women.js";
import Boots from "../category/Boots.js";
import Slippers from "../category/Slippers.js";
import Category from "../category/Category.js";

import Google from "../login/Google.js";

import Fb from "../login/Fb.js";
import CreateCategory from "../category/CreateCategory.js";
import ReadAllCategory from "../category/ReadAllCategory.js";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/men" element={<Men></Men>}></Route>
        <Route path="/women" element={<Women></Women>}></Route>
        <Route path="/fb" element={<Fb></Fb>}></Route>
        <Route path="/google" element={<Google></Google>}></Route>
        <Route path="/categoryshoe" element={<Category></Category>}></Route>

        <Route path="/menboot" element={<Boots></Boots>}></Route>
        <Route path="/menslipper" element={<Slippers></Slippers>}></Route>
        <Route
          path="/category/create"
          element={<CreateCategory></CreateCategory>}
        ></Route>
        <Route
          path="/category"
          element={<ReadAllCategory></ReadAllCategory>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
