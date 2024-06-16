import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";

const ReadSpecificCategory = () => {
  let [category, setCategory] = useState([]);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/categorys/${params.id}`,
        method: "get",
      });
      console.log(result);
      setCategory(result.data.result);
    } catch (error) {
      console.error("Error fetching category", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-4">Category Details</h1>
          <img
            src={category.categoryImage}
            alt={category.categoryName}
            style={{ width: "200px", height: "200px" }}
          />

          <p className="text-2xl font-semibold">{category.categoryName}</p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Parent:</span> {category.categoryParent}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-bold">Status:</span> {category.categoryStatus}
          </p>
          {category.categoryImage && (
            <div
              className="relative mb-2"
              style={{ paddingBottom: "56.25%" }}
            ></div>
          )}
          <p className="text-gray-700 mb-2">
            <span className="font-bold">URL:</span> {category.categoryUrl}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ReadSpecificCategory;
