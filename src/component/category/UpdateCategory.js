import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
const UpdateCategory = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [categoryName, setCategoryName] = useState("");
  let [categoryParent, setCategoryParent] = useState("");
  let [categoryStatus, setCategoryStatus] = useState("");
  let [categoryImage, setCategoryImage] = useState("");
  let [categoryUrl, setCategoryUrl] = useState("");

  const getData = async () => {
    try {
      let result = await axios({
        url: `${process.env.URL}/categorys/${id}`,
        method: "get",
      });
      let data = result.data.result;
      setCategoryName(data.CategoryName);
      setCategoryParent(data.CategoryParent);
      setCategoryStatus(data.CategoryStatus);
      setCategoryImage(data.setCategoryImage);
      setCategoryUrl(data.CategoryUrl);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  let handleSubmit = async (e) => {
    e.preventDefault();
    //e.preventDefault is done to prevent default property(refresh)
    let data = {
      categoryName: categoryName,
      categoryParent: categoryParent,
      categoryStatus: categoryStatus,
      categoryImage: categoryImage,
      categoryUrl: categoryUrl,
    };
    //hit api using axios
    try {
      let result = await axios({
        url: `http://localhost:8001/categorys/${id}`,
        method: "patch",
        data: data,
      });

      // setAge("");
      // setName("");
      // setIsMarried(false);
      navigate(`/category/${id}`);
      toast.success(result.data.message);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }

    // console.log(data)
  };
  return (
    <div className="flex flex-col text-center border-solid border-2 border-black hover:border-2 border-rose-600 ">
      <form className="p-7" onSubmit={handleSubmit}>
        <div className="mb-10">
          <label htmlFor="categoryName"> Category Name</label>
          <input
            className="border-solid border-2 border-black ml-8"
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="categoryParent">category Parent</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="categoryParent"
            value={categoryParent}
            onChange={(e) => {
              setCategoryParent(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="categoryStatus">category Status</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="categoryStatus"
            value={categoryStatus}
            onChange={(e) => {
              setCategoryStatus(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-10">
          <label htmlFor="categoryImage">category Image</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="categoryImage"
            value={categoryImage}
            onChange={(e) => {
              setCategoryImage(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="categoryUrl">category Url</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="categoryUrl"
            value={categoryUrl}
            onChange={(e) => {
              setCategoryUrl(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Update</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateCategory;
