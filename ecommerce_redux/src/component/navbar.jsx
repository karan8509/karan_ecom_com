import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.product.AllProduct);
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <span className="text-xl font-bold">Redux Toolkit</span>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-400 transition duration-200">
          Home
        </Link>
        <Link
          to="/cart"
          className="flex items-center space-x-2 hover:text-gray-400 transition duration-200"
          aria-label="Go to Cart"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="text-sm font-semibold">{cart.length}</span>
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
