import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateCategory from "../category/CreateCategory.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Layout from "../layout/Layout.js";

const ReadAlCategory = () => {
  let [categorys, setCategorys] = useState([]);
  let navigate = useNavigate();
  const [showCreateCategory, setShowCreateCategory] = useState(false);

  const handleAddCategoryClick = () => {
    setShowCreateCategory(true);
  };

  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/categorys",
        method: "get",
      });
      setCategorys(result.data.result);
    } catch (error) {
      console.error("Error fetching categorys", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:8001/categorys/${id}`,
        method: "delete",
      });
      getData();
      toast.success(result.data.message);
    } catch (error) {
      toast.error("Error deleting category");
    }
  };

  return (
    <Layout>
    <div className="container mx-auto p-4">
      <ToastContainer />
      <button
        className="bg-green-500 text-white py-2 px-4 rounded mb-4 hover:bg-green-600"
        // onClick={handleAddCategoryClick}
        onClick={() => navigate("/category/create")}
      >
        Add Category
      </button>
      {showCreateCategory && <CreateCategory />}

      <div className="flex flex-col gap-4">
        <div className="border rounded-md p-4 flex justify-between font-bold bg-gray-100">
          <ul className="flex-1">#</ul>
          <ul className="flex-1">Image</ul>
          <ul className="flex-1">Category</ul>
          <ul className="flex-1">Status</ul>
          <ul className="flex-1">Url</ul>
          <ul className="flex-1">Actions</ul>
        </div>
        {categorys.map((item, i) => (
          <div
            key={i}
            className="border rounded-md p-4 flex justify-between items-center"
          >
            <ul className="flex-1">
              <li>{i + 1}</li>
            </ul>
            <ul className="flex-1">
              <li>
                <img
                  src={item.categoryImage}
                  alt={item.categoryName}
                  className="w-12 h-12 object-cover rounded"
                />
              </li>
            </ul>
            <ul className="flex-1">
              <li>{item.categoryName}</li>
            </ul>
            <ul className="flex-1">
              <li>{item.categoryStatus}</li>
            </ul>
            <ul className="flex-1">
              <li>{item.categoryUrl}</li>
            </ul>
            <ul className="flex-1 flex gap-2">
              <li>
                <button
                  onClick={() => {
                    navigate(`/category/${item._id}`);
                  }}
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate(`/category/update/${item._id}`);
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
            </ul>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default ReadAlCategory;
