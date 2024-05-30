import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadAllProduct = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();
  /*
    hit api on page load
    api gives data
    set data to state variable
    display data
    */
  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/products",
        method: "get",
      });
      setProducts(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    let result = await axios({
      url: `http://localhost:8001/products/${id}`,
      method: "delete",
    });
    getData();
    console.log(result);
    toast.success(result.data.message);
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      {products.map((item, i) => {
        return (
          <div key={i} style={{ border: "solid red 3px", margin: "10px" }}>
            <p>name is {item.productName}</p>
            <p>Category ID: {item.categoryId?._id}</p>
            <p>Category Name: {item.categoryId?.categoryName}</p>
            <p>Subcategory ID: {item.subcategoryId?._id}</p>
            <p>Subcategory Name: {item.subcategoryId?.subcategoryName}</p>
            <p>Status is {item.productStatus}</p>
            <p>FeatureImage is {item.featureImage}</p>
            {item.featureImage && (
              <img
                src={item.featureImage}
                alt={item.productName}
                style={{ width: "100px", height: "100px" }}
              />
            )}
            <p>display Price is {item.displayPrice}</p>
            <p>actual Price is {item.actualPrice}</p>
            <p>short Description is {item.shortDescription}</p>

            <button
              onClick={() => {
                navigate(`/product/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/product/update/${item._id}`);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(item._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
