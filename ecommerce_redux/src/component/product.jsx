import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProductData } from "../redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    };

  if (isLoading) return <h1 className="text-center mt-10">Loading...</h1>;
  if (error) return <h1 className="text-center mt-10 text-red-500">{error}</h1>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={product.images?.[0]}
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
                {product.category?.name}
              </span>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200">
                Like
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
