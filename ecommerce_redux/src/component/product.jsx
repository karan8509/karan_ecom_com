import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";

const Product = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setData(response.data);
      } catch (error) {
        console.log("err -->", error.message);
      }
    })();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={product.images}
            alt={product.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-xl text-gray-800">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-semibold text-green-600">
                ${product.price}
              </span>
              <span className="text-sm text-gray-500">
                {product.category.name}
              </span>
            </div>
            <button
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ease-in-out"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>

            <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out">
              Like to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
