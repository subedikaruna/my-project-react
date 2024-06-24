import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Nav from "../component/navbar/Nav.js";
import axios from "axios";

const AppLinks = () => {
  const [isRegisterDropdownOpen, setRegisterDropdownOpen] = useState(false);
  const [categorys, setCategorys] = useState([]);
  const [isCategoryOpen, setCategoryOpen] = useState(false);
  const [isLoginDropdownOpen, setLoginDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:8001/categorys");
      setCategorys(result.data.result);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleCategoryOpen = (e) => {
    e.stopPropagation();
    setCategoryOpen(!isCategoryOpen);
    setRegisterDropdownOpen(false);
    setLoginDropdownOpen(false);
  };

  const toggleRegisterDropdown = (e) => {
    e.stopPropagation();
    setRegisterDropdownOpen(!isRegisterDropdownOpen);
    setLoginDropdownOpen(false);
    setCategoryOpen(false);
  };

  const toggleLoginDropdown = (e) => {
    e.stopPropagation();
    setLoginDropdownOpen(!isLoginDropdownOpen);
    setRegisterDropdownOpen(false);
    setCategoryOpen(false);
  };

  const closeDropdowns = () => {
    setRegisterDropdownOpen(false);
    setLoginDropdownOpen(false);
    setCategoryOpen(false);
  };

  return (
    <div onClick={closeDropdowns} className="relative">
      <div className="flex justify-between items-center shadow-md px-5">
        <NavLink to="/" className="inline-block text-center">
          <Nav />
        </NavLink>

        <NavLink to="/" className="inline-block text-center">
          Home
        </NavLink>
        <NavLink to="/admin/verify-email" className="inline-block text-center">
         Admin Verify
        </NavLink>
        <NavLink to="/admin/my-profile" className="inline-block text-center">
          My Profile
        </NavLink>
        <NavLink to="/admin/logout" className="inline-block text-center">
          Admin Logout
        </NavLink>
        <NavLink
          to="/admin/update-password"
          className="inline-block text-center"
        >
          Admin Update Password
        </NavLink>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={toggleCategoryOpen}
              className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              Category
            </button>
          </div>
          {isCategoryOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical">
                {categorys.map((item, i) => (
                  <div
                    key={i}
                    className="border rounded-md p-4 flex justify-between items-center"
                    onClick={() => {
                      navigate(`/category/${item._id}`);
                      closeDropdowns();
                    }}
                  >
                    <ul className="flex-1">
                      <li>{item.categoryName}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={toggleRegisterDropdown}
              className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              Register
            </button>
          </div>
          {isRegisterDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <NavLink
                  to="/admin/register"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Admin Register
                </NavLink>
                <NavLink
                  to="/client/register"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Client Register
                </NavLink>
              </div>
            </div>
          )}
        </div>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={toggleLoginDropdown}
              className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              Login
            </button>
          </div>
          {isLoginDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <NavLink
                  to="/admin/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Admin Login
                </NavLink>
                <NavLink
                  to="/client/login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Client Login
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <NavLink to="/dashboard" className="inline-block text-center">
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default AppLinks;
