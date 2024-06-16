import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEdit,
  faTrash,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import CreateImage from "./CreateImage";
import Layout from "../layout/Layout.js";

const ReadAlImage = () => {
  let [images, setImages] = useState([]);
  let [showContent, setShowContent] = useState(false);
  let navigate = useNavigate();

  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/images",
        method: "get",
      });
      setImages(result.data.result);
    } catch (error) {
      console.error("Error fetching images", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:8001/images/${id}`,
        method: "delete",
      });
      getData();
      toast.success(result.data.message);
    } catch (error) {
      toast.error("Error deleting image");
    }
  };

  const toggleContent = () => {
    setShowContent(true);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600"
          // onClick={toggleContent}
          onClick={() => navigate("/image/create")}
        >
          Add Image
        </button>
        {showContent && <CreateImage></CreateImage>}
        <ToastContainer />
        <div className="flex flex-col gap-4">
          <div className="border rounded-md p-4 flex justify-between font-bold bg-gray-100">
            <ul className="flex-1">#</ul>
            <ul className="flex-1">Image</ul>

            <ul className="flex-1">Product ID</ul>
            <ul className="flex-1">Path</ul>
            <ul className="flex-1">Actions</ul>
          </div>
          {images.map((item, i) => (
            <div key={i} className="border rounded-md p-4">
              <div className="flex justify-between items-center">
                <ul className="flex-1">
                  <li>{i + 1}</li>
                </ul>
                {/* <ul className="flex-1">
                <li>
                  <img
                    src={item.imagePath}
                    alt={item.imageName}
                    className="w-12 h-12 object-cover rounded"
                  />
                </li>
              </ul> */}
                <ul className="flex-1">
                  <li>{item.imageName}</li>
                </ul>
                <ul className="flex-1">
                  <li>
                    {item.productId
                      ? item.productId.productName
                      : "No Product Name"}
                  </li>
                </ul>
                <ul className="flex-1">
                  <li>{item.imagePath}</li>
                </ul>
                <ul className="flex-1 flex gap-2">
                  <li>
                    <button
                      onClick={() => {
                        navigate(`/image/${item._id}`);
                      }}
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        navigate(`/image/update/${item._id}`);
                      }}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </li>
                  <li>
                    <button onClick={() => toggleContent(i)}>
                      <FontAwesomeIcon
                        icon={showContent[i] ? faChevronUp : faChevronDown}
                      />
                    </button>
                  </li>
                </ul>
              </div>
              {showContent[i] && (
                <div className="mt-4">
                  <p>Name: {item.imageName}</p>
                  <p>
                    Product:{" "}
                    {item.productId
                      ? item.productId.productName
                      : "No Product Name"}
                  </p>
                  <p>Image Path: {item.imagePath}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ReadAlImage;
