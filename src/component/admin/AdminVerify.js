import React, { useEffect } from "react";
import Dashboard from "../dashboard/Dashboard.js";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const AdminVerify = () => {
  let [query] = useSearchParams();
  let token = query.get("token");
  let navigate = useNavigate();
  let verifyEmail = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8001/web-users/verify-email",
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/login");
    } catch (error) {}
  };
  useEffect(() => {
    verifyEmail();
  }, []);
  return <div>Admin Verify</div>;
};

export default AdminVerify;
