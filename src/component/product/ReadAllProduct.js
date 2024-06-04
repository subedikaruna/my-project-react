import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateProduct from "../product/CreateProduct.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const ReadAllProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const navigate = useNavigate();
  const [showCreateProduct, setShowCreateProduct] = useState(false);

  const handleAddProductClick = () => {
    setShowCreateProduct(true);
  };

  const getData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8001/products",
        method: "get",
      });
      // Filter out products with invalid or missing categoryId
      const validProducts = result.data.result.filter(
        (product) => product.categoryId && product.categoryId.categoryName
      );
      setProducts(validProducts);
      setFilteredProducts(validProducts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => {
      return product.productName.toLowerCase().includes(searchTerm.toLowerCase()) &&
             product.categoryId.categoryName.toLowerCase().includes(categoryFilter.toLowerCase());
    });
    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, products]);

  const handleDelete = async (id) => {
    try {
      const result = await axios({
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

  return (
    <div>
      <ToastContainer />
      <button onClick={handleAddProductClick}>Add Product</button>
      {showCreateProduct && <CreateProduct />}
      
      <div className="flex gap-2 my-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="border rounded-md p-2"
        />
      </div>
      
      <div className="flex gap-2 my-4">
        <input
          type="text"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          placeholder="Filter by category..."
          className="border rounded-md p-2"
        />
      </div>
      
      <div className="flex flex-col gap-3">
        <div className="border rounded-md p-5 flex justify-between font-bold">
          <ul>#</ul>
          <ul>Image</ul>
          <ul>Product</ul>
          <ul>Category</ul>
          <ul>Status</ul>
          <ul>Price</ul>
          <ul>Actions</ul>
        </div>
        {filteredProducts.map((item, i) => (
          <div key={i} className="border rounded-md p-5 flex justify-between">
            <ul>
              <li>{i + 1}</li>
            </ul>
            <ul>
              <li>
                <img
                  src={item.featureImage}
                  alt={item.productName}
                  style={{ width: "50px", height: "50px" }}
                />
              </li>
            </ul>
            <ul>
              <li>{item.productName}</li>
            </ul>
            <ul>
              <li>{item.categoryId?.categoryName}</li>
            </ul>
            <ul>
              <li>{item.productStatus}</li>
            </ul>
            <ul>
              <li>{item.displayPrice}</li>
            </ul>
            <ul className="flex gap-2">
              <li>
                <button
                  onClick={() => {
                    navigate(`/product/${item._id}`);
                  }}
                >
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate(`/product/update/${item._id}`);
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadAllProduct;
