import React from "react";
import { NavLink } from "react-router-dom";

const Boots = () => {
  return (
    <div>
      <div className=" flex flex-col  ">
        <NavLink to="/menboot" className="inline-block "></NavLink>
        <NavLink to="/menslipper" className="inline-block"></NavLink>
      </div>
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

export default Boots;
