import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout.js";

const ReadSpecificProductdetail = () => {
  let [productdetail, setProductdetail] = useState([]);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/productdetails/${params.id}`,
        method: "get",
      });
      setProductdetail(result.data.result);
    } catch (error) {
      console.error("Failed to fetch productdetail data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Layout>
    <div>
      <p>product Feature {productdetail.productFeature}</p>
      <p>
        Product ID
        {productdetail.productId
          ? productdetail.productId.productName
          : "No Product Name"}
      </p>
      <p>productDescription {productdetail.productDescription}</p>
    </div>
    </Layout>
  );
};

export default ReadSpecificProductdetail;
