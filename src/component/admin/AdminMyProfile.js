import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../layout/Layout.js";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminMyProfile = () => {
  let token = localStorage.getItem("token");
  let navigate = useNavigate();
  let [profile, setProfile] = useState({});

  let getAdminProfile = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/web-users/my-profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAdminProfile();
  }, []);

  return (
    <div>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen py-8 bg-gray-100">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-semibold">Full Name:</span>
                <span>{profile.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Gender:</span>
                <span>{profile.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Date of Birth:</span>
                <span>{new Date(profile.dob).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Email:</span>
                <span>{profile.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold">Role:</span>
                <span>{profile.role}</span>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => {
                    navigate("/admin/profile-update");
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </Layout>
    </div>
  );
};

export default AdminMyProfile;
