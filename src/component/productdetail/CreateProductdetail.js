import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProductdetail = () => {
  let [productId, setProductId] = useState("");

  let [productFeature, setProductFeature] = useState("");
  let [productDescription, setProductDescription] = useState("");

  let [products, setProducts] = useState([]);

  let getProducts = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/products`,
        method: "get",
      });
      setProducts(result.data.result);
    } catch (error) {}
  };
  useEffect(() => {
    getProducts();
  }, []);
  // console.log(productdetails);
  let myProducts = products.map((item, i) => {
    return {
      label: item.productName,
      value: item._id,
    };
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100 ">
      <form
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          //e.preventDefault is done to prevent default property(refresh)
          let data = {
            productId: productId,
            productFeature: productFeature,
            productDescription: productDescription,
          };
          //hit api using axios
          try {
            let result = await axios({
              url: "http://localhost:8001/productdetails",
              method: "post",
              data: data,
            });
            setProductId("");
            setProductFeature("");

            setProductDescription("");
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
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
          Product Detail
          </h2>
        <div className="mb-6">
          <label htmlFor="productId" className="block text-gray-600 mb-2">Product Id</label>

          <select
            id="productId"
            className="w-full border border-gray-300 rounded-md p-2"
            type="number"
            value={productId}
            onChange={(e) => {
              setProductId(e.target.value);
            }}
          >
            {myProducts.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="productFeature" className="block text-gray-600 mb-2"> product Feature</label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            id="productFeature"
            type="text"
            value={productFeature}
            onChange={(e) => {
              setProductFeature(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-6">
          <label htmlFor="productDescription" block text-gray-600 mb-2>product Description</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            id="productDescription"
            value={productDescription}
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          ></textarea>
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

export default CreateProductdetail;
