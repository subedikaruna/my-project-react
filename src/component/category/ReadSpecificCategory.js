import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificCategory = () => {
  let [category, setCategory] = useState([]);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/categorys/${params.id}`,
        method: "get",
      });
      setCategory(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>name is {category.categoryName}</p>
      <p>parent is {category.categoryParent}</p>
      <p>Status is {category.categoryStatus}</p>
      <p>Image is {category.categoryImage}</p>
      <img
        src={category.categoryImage}
        alt={category.categoryName}
        style={{ width: "200px", height: "100px" }}
      />
      <p>Url is {category.categoryUrl}</p>
    </div>
  );
};

export default ReadSpecificCategory;
