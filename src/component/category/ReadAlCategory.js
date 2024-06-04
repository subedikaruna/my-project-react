import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ReadAlCategory = () => {
  let [categorys, setCategorys] = useState([]);
  let navigate = useNavigate();

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
    <div>
      <ToastContainer />

      <div className="flex flex-col gap-3">
        <div className="border rounded-md p-5 flex justify-between font-bold">
          <ul>#</ul>
          <ul>Image</ul>

          <ul>Category</ul>
          <ul>Status</ul>

          <ul>Url</ul>
        </div>
        {categorys.map((item, i) => (
          <div key={i} className="border rounded-md p-5 flex justify-between">
            <ul>
              <li>{i + 1}</li>
            </ul>
            <ul>
              <li>
                <img
                  src={item.categoryImage}
                  alt={item.categoryName}
                  style={{ width: "50px", height: "50px" }}
                />
              </li>
            </ul>
            <ul>
              <li>{item.categoryName}</li>
            </ul>

            <ul>
              <li>{item.categoryStatus}</li>
            </ul>
            <ul>
              <li>{item.categoryUrl}</li>
            </ul>

            <ul className="flex gap-2">
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
  );
};

export default ReadAlCategory;
