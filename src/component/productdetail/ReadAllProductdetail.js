import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ReadAllProductdetail = () => {
  const [productdetails, setProductdetails] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      let result = await axios.get("http://localhost:8001/productdetails");
      setProductdetails(result.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios.delete(
        `http://localhost:8001/productdetails/${id}`
      );
      getData();
      toast.success(result.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the product.");
    }
  };

  const handleView = (productId) => {
    navigate(`/productdetail/${productId}`);
  };

  const handleEdit = (productId) => {
    navigate(`/productdetail/update/${productId}`);
  };
  return (
    <div>
      <ToastContainer />
      {productdetails.map((item, i) => (
        <div key={i} className="border border-red-500 p-4 rounded-lg shadow-md">
          <div className="p-4">
            <h1 className="text-xl font-bold">{item.productName}</h1>
            <h2 className="text-lg">
              Product ID:{" "}
              {item.productId ? item.productId.productName : "No Product Name"}
            </h2>

            <p> product Feature {item.productFeature}</p>
            <p>productDescription{item.productDescription}</p>

            <button onClick={() => handleView(item._id)}>View</button>
            <button onClick={() => handleEdit(item._id)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadAllProductdetail;
