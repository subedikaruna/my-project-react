import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProfileUpdate = () => {
  const [fullName, setFullName] = useState("");
  let navigate = useNavigate();
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("female");
  let token = localStorage.getItem("token");

  const onSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullName: fullName,

      gender: gender,
      dob: dob,
    };

    try {
      let result = await axios({
        url: "http://localhost:8001/web-users/update-profile",
        method: "PATCH",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/my-profile");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const genders = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ];
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
      let data = result.data.data;
      setFullName(data.fullName);

      setGender(data.gender);
      setDob(data.dob);
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
            htmlFor="name"
            className="block text-gray-700 mb-2 font-semibold"
          >
            Full Name
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-semibold">
            Gender:
          </label>
          <div className="flex space-x-4">
            {genders.map((item, i) => (
              <span key={i} className="flex items-center">
                <input
                  className="mr-2"
                  id={item.value}
                  type="radio"
                  checked={gender === item.value}
                  value={item.value}
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor={item.value} className="text-gray-700">
                  {item.label}
                </label>
              </span>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="dob"
            className="block text-gray-700 mb-2 font-semibold"
          >
            DOB
          </label>
          <input
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AdminProfileUpdate;
