import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import CreateProductdetail from "./CreateProductdetail";
import Layout from "../layout/Layout.js";

const ReadAlProductDetail = () => {
  const [productdetails, setProductdetails] = useState([]);

  const [showCreateProductdetail, setShowCreateProductdetail] = useState(false);
  const navigate = useNavigate();

  const handleAddProductdetailClick = () => {
    setShowCreateProductdetail(true);
  };

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:8001/productdetails");

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
      const result = await axios.delete(
        `http://localhost:8001/productdetails/${id}`
      );
      getData();
      toast.success(result.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the product detail.");
    }
  };
  const handleView = (productId) => {
    navigate(`/productdetail/${productId}`);
  };

  const handleEdit = (productId) => {
    navigate(`/productdetail/update/${productId}`);
  };
  return (
    <Layout>
      <div>
        <ToastContainer />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600"
          // onClick={handleAddProductdetailClick}
          onClick={() => navigate("/productdetail/create")}
        >
          Add Product Detail
        </button>
        {showCreateProductdetail && <CreateProductdetail />}

        <div className="flex flex-col gap-3">
          <div className="border rounded-md p-5 flex justify-between font-bold">
            <ul>#</ul>
            <ul>Product ID:</ul>
            <ul>Product Feature</ul>
            <ul>Product Description</ul>
            <ul>Actions</ul>
          </div>
          {productdetails.map((item, i) => (
            <div key={i} className="border rounded-md p-5 flex justify-between">
              <ul>
                <li>{i + 1}</li>
              </ul>
              <ul>
                <li>
                  {item.productId
                    ? item.productId.productName
                    : "No Product Name"}
                </li>
              </ul>
              <ul>
                <li>{item.productFeature}</li>
              </ul>
              <ul>
                <li>{item.productDescription}</li>
              </ul>
              <ul className="flex gap-2">
                <li>
                  <button onClick={() => handleView(item._id)}>
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleEdit(item._id)}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </li>
                <li>
                  <button onClick={() => handleDelete(item._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ReadAlProductDetail;
