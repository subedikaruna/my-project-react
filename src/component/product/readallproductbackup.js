import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "../product/CreateProduct.js";

const Readalproduct = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  /*
    hit api on page load
    api gives data
    set data to state variable
    display data
    */
  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/products",
        method: "get",
      });
      setProducts(result.data.result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:8001/products/${id}`,
        method: "delete",
      });
      getData();
      console.log(result);
      toast.success(result.data.message);
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete the product.");
    }
  };
  <ToastContainer />;
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((item, i) => (
        <div key={i} className="border border-red-500 p-4 rounded-lg shadow-md">
          <img
            src={item.featureImage}
            alt={item.productName}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h1 className="text-xl font-bold">{item.productName}</h1>

            <h2 className="text-lg">{item.categoryId?.categoryName}</h2>

            <h3 className="text-md">{item.subcategoryId?.subcategoryName}</h3>

            <p>Display Price: ${item.displayPrice}</p>
            <p>Short Description: {item.shortDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Readalproduct;
