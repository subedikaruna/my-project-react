import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminUpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      let result = await axios({
        url: "http://localhost:8001/web-users/update-password",
        method: "PATCH",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
     
      localStorage.removeItem("token");
      navigate("/admin/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  
  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/web-users/my-profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //setProfile(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAdminProfile();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-white shadow-lg">
      <form
        className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md"
        onSubmit={onSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="oldPassword"
            className="block text-gray-700 mb-2 font-semibold"
          >
            old Password
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="newPassword"
            className="block text-gray-700 mb-2 font-semibold"
          >
            newPassword
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Update
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminUpdatePassword;
