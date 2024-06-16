import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../layout/Layout.js"

const CreateImage = () => {
  let [imageName, setImageName] = useState("");

  let [productId, setProductId] = useState("");

  let [imagePath, setImagePath] = useState("");

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
  // console.log(images);
  let myProducts = products.map((item, i) => {
    return {
      label: item.productName,
      value: item._id,
    };
  });

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100 ">
      <form
        className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          //e.preventDefault is done to prevent default property(refresh)
          let data = {
            imageName: imageName,

            productId: productId,
            imagePath: imagePath,
          };
          //hit api using axios
          try {
            let result = await axios({
              url: "http://localhost:8001/images",
              method: "post",
              data: data,
            });

            setImageName("");
            setProductId("");
            setImagePath("");
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
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Image</h2>
        <div className="mb-6">
          <label htmlFor="imageName" className="block text-gray-600 mb-2">
            {" "}
            Image Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            id="imageName"
            type="text"
            value={imageName}
            onChange={(e) => {
              setImageName(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-6">
          <label htmlFor="productId" className="block text-gray-600 mb-2">
            Product Id
          </label>

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
          <label htmlFor="imagePath" className="block text-gray-600 mb-2">
            Image Path
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-2"
            type="text"
            id="imagePath"
            value={imagePath}
            onChange={(e) => {
              setImagePath(e.target.value);
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
    </Layout>
  );
};

export default CreateImage;
