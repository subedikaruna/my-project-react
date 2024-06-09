import axios from "axios";
import React, { useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";

const CreateCategory = () => {
  let [categoryName, setCategoryName] = useState("");
  let [categoryParent, setCategoryParent] = useState("");
  let [categoryStatus, setCategoryStatus] = useState("");
  let [categoryImage, setCategoryImage] = useState("");
  let [categoryUrl, setCategoryUrl] = useState("");

  const onDrop = useCallback(async (acceptedFiles) => {
    let fileData = acceptedFiles[0];
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
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <form
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          let data = {
            categoryName: categoryName,
            categoryParent: categoryParent,
            categoryStatus: categoryStatus,
            categoryImage: categoryImage,
            categoryUrl: categoryUrl,
          };
          console.log(data);
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
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Create Category
        </h2>
        <div className="mb-6">
          <label htmlFor="categoryName" className="block text-gray-600 mb-2">
            Category Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            id="categoryName"
            type="text"
            value={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="categoryParent" className="block text-gray-600 mb-2">
            Category Parent
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            id="categoryParent"
            value={categoryParent}
            onChange={(e) => {
              setCategoryParent(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="categoryStatus" className="block text-gray-600 mb-2">
            Category Status
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            id="categoryStatus"
            value={categoryStatus}
            onChange={(e) => {
              setCategoryStatus(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Category Image</label>
          <div
            {...getRootProps()}
            className="border-dashed border-2 border-gray-300 p-4 text-center cursor-pointer rounded-md"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
            {categoryImage && (
              <img alt="category" src={categoryImage} className="mt-4 w-full" />
            )}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="categoryUrl" className="block text-gray-600 mb-2">
            Category URL
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
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
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateCategory;
