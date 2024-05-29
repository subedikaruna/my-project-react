import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReadAllSubcategory = () => {
  let [subcategorys, setSubcategorys] = useState([]);
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
        url: "http://localhost:8001/subcategorys",
        method: "get",
      });
      setSubcategorys(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  const handleDelete = async (id) => {
    let result = await axios({
      url: `http://localhost:8001/subcategorys/${id}`,
      method: "delete",
    });
    getData();
    console.log(result);
    toast.success(result.data.message);
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      {subcategorys.map((item, i) => {
        return (
          <div key={i} style={{ border: "solid red 3px", margin: "10px" }}>
            <p>name is {item.subcategoryName}</p>

            <p>Status is {item.subcategoryStatus}</p>
            <p>Image is {item.subcategoryImage}</p>
            <p>Url is {item.subcategoryUrl}</p>

            <button
              onClick={() => {
                navigate(`/subcategory/${item._id}`);
              }}
            >
              View
            </button>
            <button
              onClick={() => {
                navigate(`/subcategory/update/${item._id}`);
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

export default ReadAllSubcategory;
