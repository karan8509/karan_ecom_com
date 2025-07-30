import { useDispatch, useSelector } from "react-redux";
import { removeCartProduct } from "../redux/productSlice";
import { useState } from "react";
const Cart = () => {
  const [countitem, setCountitem] = useState([]);
  const cart = useSelector((state) => state.product.AllProduct);
  const dispatch = useDispatch();

  const handleRemoveCart = (id_product) => {
    dispatch(removeCartProduct(id_product));
  };
  const increment = (items) => {
    console.log(items);
  };
  const dicremant = (item) => {
    console.log("dicremant --->", item);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul className=" space-y-4">
          {cart.map((item) => (
            <li
              key={item.id}
              className="border p-4 rounded-md shadow-md flex items-center space-x-4"
            >
              <img
                src={item.images}
                alt="Image description"
                className="w-32 h-auto rounded-lg shadow-lg object-cover"
              />

              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.title}</h2>
                <p className="text-gray-600 text-sm">${item.price}</p>
              </div>

              <div className="flex items-center space-x-4">
                {/* Quantity Adjustment */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dicremant(item.id)}
                    className="bg-red-500 text-white p-2 rounded-md hover:bg-red-400 transition duration-200"
                  >
                    -
                  </button>

                  <span className="text-xl font-semibold">
                    {countitem.item}
                  </span>

                  <button
                    onClick={() => increment(item.id)}
                    className="bg-green-500 text-white p-2 rounded-md hover:bg-green-400 transition duration-200"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveCart(item)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
