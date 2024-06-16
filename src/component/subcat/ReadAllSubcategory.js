import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../layout/Layout";

const ReadAllSubcategory = () => {
  let [subcategorys, setSubcategorys] = useState([]);
  let navigate = useNavigate();

  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/subcategorys",
        method: "get",
      });
      setSubcategorys(result.data.result);
    } catch (error) {
      console.error("Error fetching subcategorys", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:8001/subcategorys/${id}`,
        method: "delete",
      });
      getData();
      toast.success(result.data.message);
    } catch (error) {
      toast.error("Error deleting subcategory");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto p-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">All Subcategorys</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            onClick={() => navigate("/subcategory/create")}
          >
            Create Subcategory
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategorys.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">
                {item.subcategoryName}
              </h2>
              <p className="text-gray-700 mb-1">
                Parent: {item.subcategoryParent}
              </p>
              <p className="text-gray-700 mb-1">
                Status: {item.subcategoryStatus}
              </p>
              {item.subcategoryImage && (
                <img
                  src={item.subcategoryImage}
                  alt={item.subcategoryName}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
              )}
              <p className="text-gray-700 mb-2">URL: {item.subcategoryUrl}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                  onClick={() => navigate(`/subcategory/${item._id}`)}
                >
                  View
                </button>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                  onClick={() => navigate(`/subcategory/update/${item._id}`)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </Layout>
  );
};

export default ReadAllSubcategory;
