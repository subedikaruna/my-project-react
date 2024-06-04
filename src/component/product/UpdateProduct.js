import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const UpdateProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
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
  // console.log(products);
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
  const getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8001/products/${id}`,
        method: "get",
      });
      let data = result.data.result;
      setProductName(data.ProductName);

      setCategoryId(data.CategoryId);
      setSubcategoryId(data.SubcategoryId);
      setFeatureImage(data.FeatureImage);
      setProductStatus(data.ProductStatus);
      setDisplayprice(data.Displayprice);
      setActualprice(data.Actualprice);
      setShortdescription(data.Shortdescription);
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
        url: `http://localhost:8001/products/${id}`,
        method: "patch",
        data: data,
      });

      // setAge("");
      // setName("");
      // setIsMarried(false);
      navigate(`/product/${id}`);
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
  const onDrop = useCallback(async (acceptedFiles) => {
    // Do something with the files
    let fileData = acceptedFiles[0];
    //set links

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
    <div className="flex flex-col text-center border-solid border-2 border-black hover:border-2 border-rose-600 ">
      <form className="p-7" onSubmit={handleSubmit}>
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
        <div>
          <label htmlFor="categoryId">Category Id</label>

          <select
            id="categoryId"
            type="number"
            value={categoryId}
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
          >
            {myCategorys.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <label htmlFor="subcategoryId">Subcategory Id</label>

          <select
            id="subcategoryId"
            type="number"
            value={subcategoryId}
            onChange={(e) => {
              setSubcategoryId(e.target.value);
            }}
          >
            {mySubcategorys.map((item, i) => {
              return (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              );
            })}
          </select>
        </div>

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
          {featureImage ? <img alt="profile" src={featureImage}></img> : null}
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
          <label htmlFor="displayPrice">display Price</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="number"
            id="displayPrice"
            value={displayPrice}
            onChange={(e) => {
              setDisplayprice(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="actualPrice">actual Price</label>
          <input
            className="border-solid border-2 border-black ml-8"
            type="number"
            id="actualPrice"
            value={actualPrice}
            onChange={(e) => {
              setActualprice(e.target.value);
            }}
          ></input>
        </div>
        <div className="mb-10">
          <label htmlFor="shortDescription">short Description</label>
          <textarea
            className="border-solid border-2 border-black ml-8"
            id="shortDescription"
            value={shortDescription}
            onChange={(e) => {
              setShortdescription(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit">Update</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProduct;
