import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const Men = () => {
  return (
    <div>
      <NavLink to="/category" className="inline-block text-center">
        <FontAwesomeIcon icon={faBars} />
      </NavLink>

      <div className="house">
        <div className="pixx">
          <img src="./download (1).jpg" alt="Chicago" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium culpa unde dolore possimus iste fugiat vel! Tenetur,
            libero sapiente, tempore, voluptatum nisi amet sequi hic aliquam
            doloribus quos quod nostrum.
          </p>
        </div>
        <div className="pixx">
          <img src="./download (2).jpg" alt="Chicago" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium culpa unde dolore possimus iste fugiat vel! Tenetur,
            libero sapiente, tempore, voluptatum nisi amet sequi hic aliquam
            doloribus quos quod nostrum.
          </p>
        </div>
        <div className="pixx">
          <img src="./download (3).jpg" alt="Chicago" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium culpa unde dolore possimus iste fugiat vel! Tenetur,
            libero sapiente, tempore, voluptatum nisi amet sequi hic aliquam
            doloribus quos quod nostrum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Men;

// {show === true ? <Category></Category> : null}
// let [show, setShow] = useState(true);
// <button
//   onClick={() => {
//     setShow(true);
//   }}
// >
//   Categories
// </button>

// <button
//   onClick={() => {
//     setShow(false);
//   }}
// >

// </button>