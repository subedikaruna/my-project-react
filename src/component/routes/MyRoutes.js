import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../home/Home.js";
import Men from "../category/Men.js";
import Women from "../category/Women.js";

import Category from "../category/Category.js";

import CreateCategory from "../category/CreateCategory.js";
import ReadAllCategory from "../category/ReadAllCategory.js";
import ReadSpecificCategory from "../category/ReadSpecificCategory.js";
import UpdateCategory from "../category/UpdateCategory.js";

import Dashboard from "../dashboard/Dashboard.js";
import CreateSubcategory from "../subcat/CreateSubcategory.js";
import ReadAllSubcategory from "../subcat/ReadAllSubcategory.js";
import ReadSpecificSubcategory from "../subcat/ReadSpecificSubcategory.js";
import UpdateSubcategory from "../subcat/UpdateSubcategory.js";
import CreateProduct from "../product/CreateProduct.js";
import ReadAllProduct from "../product/ReadAllProduct.js";
import ReadSpecificProduct from "../product/ReadSpecificProduct.js";
import UpdateProduct from "../product/UpdateProduct.js";
import CreateImage from "../image/CreateImage.js";
import ReadAllImage from "../image/ReadAllImage.js";
import ReadSpecificImage from "../image/ReadSpecificImage.js";
import UpdateImage from "../image/UpdateImage.js";
import CreateProductdetail from "../productdetail/CreateProductdetail.js";

import ReadSpecificProductdetail from "../productdetail/ReadSpecificProductdetail.js";
import UpdateProductdetail from "../productdetail/UpdateProductdetail.js";
import Readalproduct from "../product/readallproductbackup.js";
import Product from "../product/Product.js";
import ReadAlCategory from "../category/ReadAlCategory.js";
import ReadAlImage from "../image/ReadAlImage .js";
import Image from "../image/Image.js";
import ReadAlProductdetail from "../productdetail/ReadAlProductdetail.js";
import ReadAllProductdetail from "../productdetail/ReadAllProductdetail.js";

import AdminVerify from "../admin/AdminVerify.js";
import AdminLogin from "../admin/AdminLogin.js";
import ClientLogin from "../client/ClientLogin.js";
import AdminRegister from "../admin/AdminRegister.js";
import ClientRegister from "../client/ClientRegister.js";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/verify-email"
          element={<AdminVerify></AdminVerify>}
        ></Route>

        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/{item.categoryName}" element={<Men></Men>}></Route>
        <Route path="/{item.categoryName}" element={<Women></Women>}></Route>

        <Route path="/admin/login" element={<AdminLogin></AdminLogin>}></Route>
        <Route
          path="/client/login"
          element={<ClientLogin></ClientLogin>}
        ></Route>
        <Route
          path="/admin/register"
          element={<AdminRegister></AdminRegister>}
        ></Route>
        <Route
          path="/client/register"
          element={<ClientRegister></ClientRegister>}
        ></Route>

        <Route path="/category" element={<Category></Category>}></Route>

        <Route
          path="/category/create"
          element={<CreateCategory></CreateCategory>}
        ></Route>
        <Route
          path="/category"
          element={<ReadAllCategory></ReadAllCategory>}
        ></Route>
        <Route
          path="/categoryy"
          element={<ReadAlCategory></ReadAlCategory>}
        ></Route>
        <Route
          path="/category/:id"
          element={<ReadSpecificCategory></ReadSpecificCategory>}
        ></Route>
        <Route
          path="/category/update/:id"
          element={<UpdateCategory></UpdateCategory>}
        ></Route>
        <Route
          path="/subcategory/create"
          element={<CreateSubcategory></CreateSubcategory>}
        ></Route>
        <Route
          path="/subcategory"
          element={<ReadAllSubcategory></ReadAllSubcategory>}
        ></Route>
        <Route
          path="/subcategory/:id"
          element={<ReadSpecificSubcategory></ReadSpecificSubcategory>}
        ></Route>
        <Route
          path="/subcategory/update/:id"
          element={<UpdateSubcategory></UpdateSubcategory>}
        ></Route>

        <Route
          path="/product/create"
          element={<CreateProduct></CreateProduct>}
        ></Route>
        <Route
          path="/product"
          element={<ReadAllProduct></ReadAllProduct>}
        ></Route>
        <Route path="/productt" element={<Product></Product>}></Route>
        <Route
          path="/productt"
          element={<Readalproduct></Readalproduct>}
        ></Route>

        <Route
          path="/product/:id"
          element={<ReadSpecificProduct></ReadSpecificProduct>}
        ></Route>
        <Route
          path="/product/update/:id"
          element={<UpdateProduct></UpdateProduct>}
        ></Route>
        <Route
          path="/image/create"
          element={<CreateImage></CreateImage>}
        ></Route>
        <Route path="/image" element={<ReadAlImage></ReadAlImage>}></Route>
        <Route path="/image" element={<Image></Image>}></Route>
        <Route path="/imagee" element={<ReadAllImage></ReadAllImage>}></Route>
        <Route
          path="/image/:id"
          element={<ReadSpecificImage></ReadSpecificImage>}
        ></Route>
        <Route
          path="/image/update/:id"
          element={<UpdateImage></UpdateImage>}
        ></Route>
        <Route
          path="/productdetail/create"
          element={<CreateProductdetail></CreateProductdetail>}
        ></Route>
        <Route
          path="/productdetail"
          element={<ReadAlProductdetail></ReadAlProductdetail>}
        ></Route>
        <Route
          path="/productdetaill"
          element={<ReadAllProductdetail></ReadAllProductdetail>}
        ></Route>
        <Route
          path="/productdetail/:id"
          element={<ReadSpecificProductdetail></ReadSpecificProductdetail>}
        ></Route>
        <Route
          path="/productdetail/update/:id"
          element={<UpdateProductdetail></UpdateProductdetail>}
        ></Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
