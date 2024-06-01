import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateImage = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
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
  // console.log(productdetails);
  let myProducts = products.map((item, i) => {
    return {
      label: item.productName,
      value: item._id,
    };
  });

  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/images/${id}`,
        method: "get",
      });
      let data = result.data.result;

      setImageName(data.imageName);
      setProductId(data.productId);
      setImagePath(data.imagePath);
  
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  let handleSubmit = async (e) => {
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
        url: `http://localhost:8001/images/${id}`,
        method: "patch",
        data: data,
      });

      // setAge("");
      // setName("");
      // setIsMarried(false);
      navigate(`/image/${id}`);
      toast.success(result.data.message);
    } catch (error) {
      if (error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error(error.message);
      }
    }

    // console.log(data)
  };

  return (
    <div className="flex flex-col text-center border-solid border-2 border-black hover:border-2 border-rose-600 ">
      <form className="p-7" onSubmit={handleSubmit}>
        <div className="mb-10">
          <label htmlFor="imageName"> Image Name</label>
          <input
            className="border-solid border-2 border-black ml-8"
            id="imageName"
            type="text"
            value={imageName}
            onChange={(e) => {
              setImageName(e.target.value);
            }}
          ></input>
        </div>
        <div>
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
          <label htmlFor="imagePath">Image Path</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="text"
            id="imagePath"
            value={imagePath}
            onChange={(e) => {
              setImagePath(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">Update</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateImage;
