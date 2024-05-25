import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCategory = () => {
  let [categoryName, setCategoryName] = useState("");
  let [categoryParent, setCategoryParent] = useState("");
  let [categoryStatus, setCategoryStatus] = useState("");
  let [categoryImage, setCategoryImage] = useState("");
  let [categoryUrl, setCategoryUrl] = useState("");


  return (
    <div>
  
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          //e.preventDefault is done to prevent default property(refresh)
          let data = {
            categoryName: categoryName,
            categoryParent:categoryParent,
            categoryStatus: categoryStatus,
            categoryImage: categoryImage,
            categoryUrl:categoryUrl
          };
          //hit api using axios
          try {
            let result = await axios({
              url: "http://localhost:8001/categorys",
              method: "post",
              data: data,
            });
            
            setCategoryName("");
            setCategoryParent("");
            setCategoryStatus("");
            setCategoryImage("");
            setCategoryUrl("");
         

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
        <div>
          <label htmlFor="categoryName"> Category Name</label>
          <input
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="categoryParent">category Parent</label>
          <input
            type="text"
            id="categoryParent"
            value={categoryParent}
            onChange={(e) => {
              setCategoryParent(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="categoryStatus">category Status</label>
          <input
            type="text"
            id="categoryStatus"
            value={categoryStatus}
            onChange={(e) => {
              setCategoryStatus(e.target.value);
            }}
          ></input>
        </div>
        
        <div>
          <label htmlFor="categoryImage">category Image</label>
          <input
            type="text"
            id="categoryImage"
            value={categoryImage}
            onChange={(e) => {
              setCategoryImage(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="categoryUrl">category Url</label>
          <input
            type="text"
            id="categoryUrl"
            value={categoryUrl}
            onChange={(e) => {
              setCategoryUrl(e.target.value);
            }}
          ></input>
        </div>
       
      

        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateCategory;
