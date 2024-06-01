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
    <div className="flex flex-col text-center border-solid border-2 border-black hover:border-2 border-rose-600 ">
      <form
        className="p-7"
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
        <div className="mb-10">
          <label htmlFor="productId">Product Id</label>

          <select
            id="productId"
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
        <div className="mb-10">
          <label htmlFor="productFeature"> product Feature</label>
          <input
            className="border-solid border-2 border-black ml-8"
            id="productFeature"
            type="text"
            value={productFeature}
            onChange={(e) => {
              setProductFeature(e.target.value);
            }}
          ></input>
        </div>

        <div className="mb-10">
          <label htmlFor="productDescription">product Description</label>
          <textarea
            className="border-solid border-2 border-black ml-8"
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
