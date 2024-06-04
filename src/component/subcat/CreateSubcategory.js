import axios from "axios";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let result = await axios.post("http://localhost:8001/subcategorys", {
        subcategoryName,
        subcategoryParent,
        subcategoryStatus,
        subcategoryImage,
        subcategoryUrl,
      });

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
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-full">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Create Subcategory
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="subcategoryName" className="block mb-2">
              Subcategory Name
            </label>
            <input
              id="subcategoryName"
              type="text"
              value={subcategoryName}
              onChange={(e) => setSubcategoryName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
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

          <div className="mb-6">
            <label htmlFor="subcategoryStatus" className="block mb-2">
              Subcategory Status
            </label>
            <input
              id="subcategoryStatus"
              type="text"
              value={subcategoryStatus}
              onChange={(e) => setSubcategoryStatus(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
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
            <label htmlFor="subcategoryUrl" className="block mb-2">
              Subcategory URL
            </label>
            <input
              id="subcategoryUrl"
              type="text"
              value={subcategoryUrl}
              onChange={(e) => setSubcategoryUrl(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateSubcategory;
