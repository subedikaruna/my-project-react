import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadAllCategory = () => {
  let [categorys, setCategorys] = useState([]);
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
        url: "http://localhost:8001/categorys",
        method: "get",
      });
      setCategorys(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    let result = await axios({
      url: `http://localhost:8001/categorys/${id}`,
      method: "delete",
    });
    getData();
    console.log(result);
    toast.success(result.data.message);
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      {categorys.map((item, i) => {
        return (
          <div key={i} style={{ border: "solid red 3px", margin: "10px" }}>
            <p>name is {item.categoryName}</p>
            <p>parent is {item.categoryParent}</p>
            <p>Status is {item.categoryStatus}</p>
            <p>Image is {item.categoryImage}</p>
            {item.categoryImage && (
              <img
                src={item.categoryImage}
                alt={item.categoryName}
                style={{ width: "200px", height: "100px" }}
              />
            )}
            <p>Url is {item.categoryUrl}</p>

            <button
              onClick={() => {
                navigate(`/category/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/category/update/${item._id}`);
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

export default ReadAllCategory;
