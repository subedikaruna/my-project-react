import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateSubcategory = () => {
  let [subcategoryName, setSubcategoryName] = useState("");

  let [subcategoryStatus, setSubcategoryStatus] = useState("");
  let [subcategoryImage, setSubcategoryImage] = useState("");
  let [subcategoryUrl, setSubcategoryUrl] = useState("");
  let [subcategoryId, setSubcategoryId] = useState("");

  return (
    <div className="flex flex-col text-center border-solid border-2 border-black hover:border-2 border-rose-600 ">
      <form
        className="p-7"
        onSubmit={async (e) => {
          e.preventDefault();
          //e.preventDefault is done to prevent default property(refresh)
          let data = {
            subcategoryName: subcategoryName,

            subcategoryStatus: subcategoryStatus,
            subcategoryImage: subcategoryImage,
            subcategoryUrl: subcategoryUrl,
        
          };
          //hit api using axios
          try {
            let result = await axios({
              url: "http://localhost:8001/subcategorys",
              method: "post",
              data: data,
            });

            setSubcategoryName("");

            setSubcategoryStatus("");
            setSubcategoryImage("");
            setSubcategoryUrl("");
     
            toast.success(result.data.message);
          } catch (error) {
            if (error.response.data.message) {
              toast.error(error.response.data.message);
            } else {
              toast.error(error.message);
            }
          }

          // console.log(data)
        }}
      >
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
      
        <button
          type="submit"
          className="border-solid border-2 border-black p-2"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateSubcategory;
