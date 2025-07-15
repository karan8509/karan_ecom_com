import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <span className="text-xl font-bold">Redux Toolkit</span>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-400 transition duration-200">
          Home
        </Link>
        <Link
          to="/cart"
          className="hover:text-gray-400 transition duration-200"
        >
          <ShoppingCart className="w-6 h-6" />
        </Link>
        <Link
          to="/like"
          className="hover:text-gray-400 transition duration-200"
        >
          <Heart className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
