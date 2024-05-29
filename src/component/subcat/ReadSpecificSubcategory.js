import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return (
    <div>
      <p>name is {subcategory.subcategoryName}</p>

      <p>Status is {subcategory.subcategoryStatus}</p>
      <p>Image is {subcategory.subcategoryImage}</p>
      <p>Url is {subcategory.subcategoryUrl}</p>
    </div>
  );
};

export default ReadSpecificSubcategory;
