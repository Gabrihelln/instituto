import { Link } from "react-router-dom";
import React from "react";

const Logo = ({ type }) => {
  return (
    <div className=''>
      <Link
        to='/'
        className={`text-2xl font-semibold  dark:text-white ${
          type && "text-white  text-2xl px-16" 
        }`}
      >
        Instituto
        <p
          className={`text-4xl text-blue-600  ${type && " text-2xl font-bold"}`}
        >
        Inaldo Abreu
        </p>
      </Link>
    </div>
  );
};

export default Logo;