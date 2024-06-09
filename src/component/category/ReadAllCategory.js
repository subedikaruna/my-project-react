import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadAllCategory = () => {
  let [categorys, setCategorys] = useState([]);
  let navigate = useNavigate();

  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/categorys",
        method: "get",
      });
      setCategorys(result.data.result);
      // console.log(Data?.var);
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
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categorys.map((item, i) => (
        <div
          key={i}
          className="border border-blue-500 p-4 rounded-lg shadow-md"
        >
          {item.categoryImage && (
            <img
              src={item.categoryImage}
              alt={item.categoryName}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          )}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{item.categoryName}</h2>
            <p className="text-md mb-2">Parent: {item.categoryParent}</p>
            <p className="text-md mb-2">Status: {item.categoryStatus}</p>
            <p className="text-md mb-2">URL: {item.categoryUrl}</p>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                onClick={() => navigate(`/category/${item._id}`)}
              >
                View
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                onClick={() => navigate(`/category/update/${item._id}`)}
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
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default ReadAllCategory;
