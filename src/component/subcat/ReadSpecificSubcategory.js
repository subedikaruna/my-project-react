import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";

const ReadSpecificSubcategory = () => {
  let [subcategory, setSubcategory] = useState([]);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/subcategorys/${params.id}`,
        method: "get",
      });
      setSubcategory(result.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("data", params);
  return (
    <Layout>
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          {subcategory.subcategoryName}
        </h2>

        <p className="text-gray-700 mb-1">
          Parent: {subcategory.subcategoryParent}
        </p>
        <p className="text-gray-700 mb-1">
          Status: {subcategory.subcategoryStatus}
        </p>
        {subcategory.subcategoryImage && (
          <img
            src={subcategory.subcategoryImage}
            alt={subcategory.subcategoryName}
            className="w-full h-48 object-cover mb-2 rounded"
          />
        )}
        <p className="text-gray-700 mb-2">URL: {subcategory.subcategoryUrl}</p>
      </div>
    </Layout>
  );
};

export default ReadSpecificSubcategory;
