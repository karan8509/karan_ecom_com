import axios from "axios";
import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import userProductShow from "../store/userProduct";

const Product = () => {
  const [data, setData] = useState([]);
  const { addToCart } = userProductShow();
  const getAllProduct = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res);
      console.log(res.data);
      setData(res.data.products);
    } catch (error) {
      console.log("err", error.message);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const addToCartItem = (product) => {
    addToCart(product);
   
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {data.map((product, index) => (
        <div
          key={index}
          className="border rounded-lg shadow p-4 text-center hover:shadow-md transition"
        >
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-48 object-contain mb-4"
          />
          <h2 className="text-lg font-bold">{product.title}</h2>
          <p className="text-gray-600">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500 mb-2">{product.description}</p>
          <p className="text-green-600 font-semibold">
            Price: ₹{product.price}
          </p>
          <p className="text-yellow-600">Rating: ⭐ {product.rating}</p>
          <p className="text-blue-600 text-sm">Category: {product.category}</p>
          <p className="text-xs text-gray-500 mt-2">
            Stock: {product.stock} | ID: {product.id}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => addToCartItem(product)}
            >
              <ShoppingCart size={18} />
            </button>
            <button className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
              <Heart size={18} /> Like
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
