import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../home/Home.js";
import Men from "../category/Men.js";
import Women from "../category/Women.js";
import Boots from "../category/Boots.js";
import Slippers from "../category/Slippers.js";
import Category from "../category/Category.js";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/men" element={<Men></Men>}></Route>
        <Route path="/women" element={<Women></Women>}></Route>
        <Route path="/category" element={<Category></Category>}></Route>
        <Route path="/category/menboot" element={<Boots></Boots>}></Route>
        <Route path="/category/menslipper" element={<Slippers></Slippers>}></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
