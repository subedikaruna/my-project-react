import React from "react";

import { NavLink } from "react-router-dom";

import Combo from "./Combo.js";
import ReadAllSubcategory from "./ReadAllSubcategory.js";
import Layout from "../layout/Layout.js";
const Subcategory = () => {
  return (
    <Layout>
      <ReadAllSubcategory></ReadAllSubcategory>
    </Layout>
  );
};

export default Subcategory;
