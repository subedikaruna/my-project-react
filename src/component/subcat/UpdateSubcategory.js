import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
const UpdateSubcategory = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [subcategoryName, setSubcategoryName] = useState("");
  let [subcategoryParent, setSubcategoryParent] = useState("");
  let [subcategoryStatus, setSubcategoryStatus] = useState("");
  let [subcategoryImage, setSubcategoryImage] = useState("");
  let [subcategoryUrl, setSubcategoryUrl] = useState("");
  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/subcategorys/${id}`,
        method: "get",
      });
      let data = result.data.result;
      setSubcategoryName(data.subcategoryName);
      setSubcategoryParent(data.subcategoryParent);
      setSubcategoryStatus(data.subcategoryStatus);
      setSubcategoryImage(data.subcategoryImage);
      setSubcategoryUrl(data.subcategoryUrl);
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
      subcategoryName: subcategoryName,
      subcategoryParent: subcategoryParent,
      subcategoryStatus: subcategoryStatus,
      subcategoryImage: subcategoryImage,
      subcategoryUrl: subcategoryUrl,
    };
    //hit api using axios
    try {
      let result = await axios({
        url: `http://localhost:8001/subcategorys/${id}`,
        method: "patch",
        data: data,
      });

      // setAge("");
      // setName("");
      // setIsMarried(false);
      navigate(`/subcategory/${id}`);
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
          <label htmlFor="subcategoryName"> Subcategory Name</label>
          <input
            className="border-solid border-2 border-black ml-8"
            id="subcategoryName"
            type="text"
            value={subcategoryName}
            onChange={(e) => {
              setSubcategoryName(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="subcategoryParent" className="block mb-2">
            Subcategory Parent
          </label>
          <input
            id="subcategoryParent"
            type="text"
            value={subcategoryParent}
            onChange={(e) => setSubcategoryParent(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-10">
          <label htmlFor="subcategoryStatus">subcategory Status</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="subcategoryStatus"
            value={subcategoryStatus}
            onChange={(e) => {
              setSubcategoryStatus(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-10">
          <label htmlFor="subcategoryImage">subcategory Image</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="subcategoryImage"
            value={subcategoryImage}
            onChange={(e) => {
              setSubcategoryImage(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="subcategoryUrl">subcategory Url</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="subcategoryUrl"
            value={subcategoryUrl}
            onChange={(e) => {
              setSubcategoryUrl(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Update</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateSubcategory;
