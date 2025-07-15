import { NavLink } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-100 shadow px-6 py-4">
      <div className="flex items-center justify-between">
        
        {/* 🔵 Left Side: Logo */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-xl font-bold hover:text-blue-600 ${
              isActive ? "text-blue-600 underline" : "text-gray-800"
            }`
          }
        >
          Karan-Ecom
        </NavLink>

        {/* 🔴 Right Side: Links */}
        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium hover:text-blue-600 ${
                isActive ? "text-blue-600 underline" : "text-gray-800"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/product-like"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-800"
              }`
            }
          >
            <Heart className="w-6 h-6" />
          </NavLink>

          <NavLink
            to="/add-to-cart"
            className={({ isActive }) =>
              `hover:text-blue-600 ${
                isActive ? "text-blue-600" : "text-gray-800"
              }`
            }
          >
            <ShoppingCart className="w-6 h-6" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
