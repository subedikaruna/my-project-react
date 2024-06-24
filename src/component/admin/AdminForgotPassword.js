import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
    };

    try {
      let result = await axios({
        url: "http://localhost:8001/web-users/forgot-password",
        method: "POST",
        data: data,
      });
      setEmail("");
      toast.success("Link has been sent to your email to reset your password");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-white shadow-lg">
      <form
        className="bg-white shadow-lg rounded-xl p-10 w-full max-w-md"
        onSubmit={onSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-semibold"
          >
            email
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Forgot Password
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminForgotPassword;
