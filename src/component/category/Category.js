import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Men from "./Men.js";
import Women from "./Women.js";

const Category = () => {
  return (
    <div>
      <Men></Men>
      <Women></Women>
      {/* <button>
        <FontAwesomeIcon icon={faBars} />
      </button> */}
    </div>
  );
};

export default Category;
