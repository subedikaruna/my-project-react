import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  let [productName, setProductName] = useState("");

  let [categoryId, setCategoryId] = useState("");

  let [subcategoryId, setSubcategoryId] = useState("");
  let [featureImage, setFeatureImage] = useState("");
  let [productStatus, setProductStatus] = useState("");
  let [displayPrice, setDisplayprice] = useState("");
  let [actualPrice, setActualprice] = useState("");
  let [shortDescription, setShortDescription] = useState("");

  return (
    <div className="flex flex-col text-center border-solid border-2 border-black hover:border-2 border-rose-600 ">
      <form
        className="p-7"
        onSubmit={async (e) => {
          e.preventDefault();
          //e.preventDefault is done to prevent default property(refresh)
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
          //hit api using axios
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
            setShortDescription("");

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
          <label htmlFor="productName"> Product Name</label>
          <input
            className="border-solid border-2 border-black ml-8"
            id="productName"
            type="text"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="productImage">product Image</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="productImage"
            value={productImage}
            onChange={(e) => {
              setProductImage(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="productUrl">product Url</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="productUrl"
            value={productUrl}
            onChange={(e) => {
              setProductUrl(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-10">
          <label htmlFor="productStatus">product Status</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="productStatus"
            value={productStatus}
            onChange={(e) => {
              setProductStatus(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-10">
          <label htmlFor="productImage">product Image</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="productImage"
            value={productImage}
            onChange={(e) => {
              setProductImage(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="productUrl">product Url</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="productUrl"
            value={productUrl}
            onChange={(e) => {
              setProductUrl(e.target.value);
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

export default CreateProduct;
