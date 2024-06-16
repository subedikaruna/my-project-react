import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDropzone } from "react-dropzone";
import Layout from "../layout/Layout";

const CreateProduct = () => {
  let [productName, setProductName] = useState("");
  let [categoryId, setCategoryId] = useState("");
  let [subcategoryId, setSubcategoryId] = useState("");
  let [featureImage, setFeatureImage] = useState("");
  let [productStatus, setProductStatus] = useState("");
  let [displayPrice, setDisplayprice] = useState("");
  let [actualPrice, setActualprice] = useState("");
  let [shortDescription, setShortdescription] = useState("");

  let [categorys, setCategorys] = useState([]);
  let [subcategorys, setSubcategorys] = useState([]);

  let getCategorys = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/categorys`,
        method: "get",
      });
      setCategorys(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getCategorys();
  }, []);

  let myCategorys = categorys.map((item, i) => {
    return {
      label: item.categoryName,
      value: item._id,
    };
  });

  let getSubcategorys = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/subcategorys`,
        method: "get",
      });
      setSubcategorys(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getSubcategorys();
  }, []);
  let mySubcategorys = subcategorys.map((item, i) => {
    return {
      label: item.subcategoryName,
      value: item._id,
    };
  });

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
      setFeatureImage(result.data.result);
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
            productName: productName,
            categoryId: categoryId,
            subcategoryId: subcategoryId,
            featureImage: featureImage,
            productStatus: productStatus,
            displayPrice: displayPrice,
            actualPrice: actualPrice,
            shortDescription: shortDescription,
          };

          try {
            let result = await axios({
              url: "http://localhost:8001/products",
              method: "post",
              data: data,
            });

            setProductName("");
            setCategoryId("");
            setSubcategoryId("");
            setFeatureImage("");
            setProductStatus("");
            setDisplayprice("");
            setActualprice("");
            setShortdescription("");

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
          Create Product
        </h2>
        <div className="mb-6">
          <label htmlFor="productName" className="block text-gray-600 mb-2">
            Product Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="categoryId" className="block text-gray-600 mb-2">
            Category
          </label>
          <select
            id="categoryId"
            className="w-full border border-gray-300 rounded-md p-2"
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
          >
            <option value="">Select Category</option>
            {myCategorys.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="subcategoryId" className="block text-gray-600 mb-2">
            Subcategory
          </label>
          <select
            id="subcategoryId"
            className="w-full border border-gray-300 rounded-md p-2"
            value={subcategoryId}
            onChange={(e) => {
              setSubcategoryId(e.target.value);
            }}
          >
            <option value="">Select Subcategory</option>
            {mySubcategorys.map((item, i) => (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 mb-2">Feature Image</label>
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
            {featureImage && (
              <img alt="feature" src={featureImage} className="mt-4 w-full" />
            )}
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="productStatus" className="block text-gray-600 mb-2">
            Product Status
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            id="productStatus"
            value={productStatus}
            onChange={(e) => {
              setProductStatus(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="displayPrice" className="block text-gray-600 mb-2">
            Display Price
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="number"
            id="displayPrice"
            value={displayPrice}
            onChange={(e) => {
              setDisplayprice(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="actualPrice" className="block text-gray-600 mb-2">
            Actual Price
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="number"
            id="actualPrice"
            value={actualPrice}
            onChange={(e) => {
              setActualprice(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label
            htmlFor="shortDescription"
            className="block text-gray-600 mb-2"
          >
            Short Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            id="shortDescription"
            value={shortDescription}
            onChange={(e) => {
              setShortdescription(e.target.value);
            }}
          ></textarea>
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

export default CreateProduct;
