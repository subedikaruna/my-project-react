import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <p>name is {product.productName}</p>
      <p>Category ID: {product.categoryId}</p>
      <p>Category Name: {product.categoryId?.categoryName}</p>

      <p>Subcategory ID: {product.subcategoryId}</p>
      <p>Subcategory Name: {product.subcategoryId?.subcategoryName}</p>

      <p>Status is {product.productStatus}</p>
      <p>FeatureImage is {product.featureImage}</p>
      
        <img
          src={product.featureImage}
          alt={product.productName}
          style={{ width: "100px", height: "100px" }}
        />
  
      <p>display Price is {product.displayPrice}</p>
      <p>actual Price is {product.actualPrice}</p>
      <p>short Description is {product.shortDescription}</p>
    </div>
  );
};

export default ReadSpecificProduct;
