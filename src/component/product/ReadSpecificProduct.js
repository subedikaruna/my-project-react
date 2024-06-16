import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout.js";

const ReadSpecificProduct = () => {
  let [product, setProduct] = useState([]);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/products/${params.id}`,
        method: "get",
      });
      setProduct(result.data.result);
    } catch (error) {
      console.error("Failed to fetch product data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
      <div className="border border-red-500 p-4 rounded-lg shadow- md">
        <img
          src={product.featureImage}
          alt={product.productName}
          style={{ width: "300px", height: "200px" }}
        />
        <div className="p-4">
          <h1 className="text-xl font-bold">name is {product.productName}</h1>
          <p>Category ID: {product.categoryId}</p>
          <p>Category Name: {product.categoryId?.categoryName}</p>

          <p>Subcategory ID: {product.subcategoryId}</p>
          <p>Subcategory Name: {product.subcategoryId?.subcategoryName}</p>

          <p>Status is {product.productStatus}</p>

          <p>display Price is {product.displayPrice}</p>
          <p>actual Price is {product.actualPrice}</p>
          <p>short Description is {product.shortDescription}</p>
        </div>
      </div>
    </Layout>
  );
};

export default ReadSpecificProduct;
