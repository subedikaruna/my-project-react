import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificImage = () => {
  let [image, setImage] = useState([]);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/images/${params.id}`,
        method: "get",
      });
      setImage(result.data.result);
    } catch (error) {
      console.error("Failed to fetch image data:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p>name is {image.imageName}</p>
      <p>
        Product ID
        {image.productId ? image.productId.productName : "No Product Name"}
      </p>
      <p>Image Path: {image.imagePath}</p>
    </div>
  );
};

export default ReadSpecificImage;
