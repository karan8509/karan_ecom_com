import React from "react";
import userProductShow from "../store/userProduct";

const AddToCart = () => {
  const { allProducts } = userProductShow(); 

  console.log("userr -->", allProducts);

  return (
    <div className="p-6">
      {allProducts.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        allProducts.map((arr, index) => (
          <div key={index} className="border p-4 mb-3 rounded shadow">
            <img
              src={arr.images[0]}
              alt={arr.title}
              className="w-32 h-32 object-contain"
            />
            <h3 className="mt-2 font-semibold">{arr.title}</h3>
            <p className="text-green-600">₹{arr.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AddToCart;
