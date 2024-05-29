import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
const CreateCategory = () => {
  let [categoryName, setCategoryName] = useState("");
  let [categoryParent, setCategoryParent] = useState("");
  let [categoryStatus, setCategoryStatus] = useState("");
  let [categoryImage, setCategoryImage] = useState("");
  let [categoryUrl, setCategoryUrl] = useState("");
  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    let fileData = acceptedFiles[0];
    //set links

    let formData = new FormData();
    formData.append("document", acceptedFiles[0]);
    try {
      let result = await axios({
        url: "http://localhost:8001/files/single",
        method: "post",
        data: formData,
      });
      setCategoryImage(result.data.result);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col text-center border-solid border-2 border-black hover:border-2 border-rose-600 ">
      <form
        className="p-7"
        onSubmit={async (e) => {
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

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          {categoryImage ? <img alt="profile" src={categoryImage}></img> : null}
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

export default CreateCategory;
