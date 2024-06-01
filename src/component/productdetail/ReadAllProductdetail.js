import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadAllProductdetail = () => {
  let [productdetails, setProductdetails] = useState([]);
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
        url: "http://localhost:8001/productdetails",
        method: "get",
      });
      setProductdetails(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    let result = await axios({
      url: `http://localhost:8001/productdetails/${id}`,
      method: "delete",
    });
    getData();
    console.log(result);
    toast.success(result.data.message);
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      {productdetails.map((item, i) => {
        return (
          <div key={i} style={{ border: "solid red 3px", margin: "10px" }}>
            <p>
              Product ID:{" "}
              {item.productId ? item.productId.productName : "No Product Name"}
            </p>
            <p> product Feature {item.productFeature}</p>
            <p>productDescription{item.productDescription}</p>

            <button
              onClick={() => {
                navigate(`/productdetail/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/productdetail/update/${item._id}`);
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

export default ReadAllProductdetail;
