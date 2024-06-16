import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../layout/Layout";

const CreateSubcategory = () => {
  let [subcategoryName, setSubcategoryName] = useState("");
  let [subcategoryParent, setSubcategoryParent] = useState("");
  let [subcategoryStatus, setSubcategoryStatus] = useState("");
  let [subcategoryImage, setSubcategoryImage] = useState("");
  let [subcategoryUrl, setSubcategoryUrl] = useState("");

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
      setSubcategoryImage(result.data.result);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
      <form
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          let data = {
            subcategoryName: subcategoryName,
            subcategoryParent: subcategoryName,
            subcategoryStatus: subcategoryName,
            subcategoryImage: subcategoryName,
            subcategoryUrl: subcategoryName,
          };

          try {
            let result = await axios.post(
              "http://localhost:8001/subcategorys",
              {
                subcategoryName,
                subcategoryParent,
                subcategoryStatus,
                subcategoryImage,
                subcategoryUrl,
              }
            );

            setSubcategoryName("");
            setSubcategoryParent("");
            setSubcategoryStatus("");
            setSubcategoryImage("");
            setSubcategoryUrl("");

            toast.success(result.data.message);
          } catch (error) {
            if (error.response && error.response.data.message) {
              toast.error(error.response.data.message);
            } else {
              toast.error(error.message);
            }
          }
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Create Subcategory
        </h2>

        <div className="mb-6">
          <label htmlFor="subcategoryName" className="block text-gray-600 mb-2">
            Subcategory Name
          </label>
          <input
            id="subcategoryName"
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            value={subcategoryName}
            onChange={(e) => {
              setSubcategoryName(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="subcategoryParent"
            className="block text-gray-600 mb-2"
          >
            Subcategory Parent
          </label>
          <input
            id="subcategoryParent"
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            value={subcategoryParent}
            onChange={(e) => {
              setSubcategoryParent(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-6">
          <label
            htmlFor="subcategoryStatus"
            className="block text-gray-600 mb-2"
          >
            Subcategory Status
          </label>
          <input
            id="subcategoryStatus"
            type="text"
            value={subcategoryStatus}
            onChange={(e) => {
              setSubcategoryStatus(e.target.value);
            }}
            className="w-full border border-gray-300 rounded-md p-2"
          ></input>
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 mb-2"> Image</label>
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
            {subcategoryImage && (
              <img
                alt="category"
                src={subcategoryImage}
                className="mt-4 w-full"
              />
            )}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="subcategoryUrl" className="block text-gray-600 mb-2">
            Subcategory URL
          </label>
          <input
            id="subcategoryUrl"
            type="text"
            value={subcategoryUrl}
            onChange={(e) => {
              setSubcategoryUrl(e.target.value);
            }}
            className="w-full border border-gray-300 rounded-md p-2"
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
    </Layout>
  );
};

export default CreateSubcategory;
