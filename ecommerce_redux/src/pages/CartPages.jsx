import { useDispatch, useSelector } from 'react-redux';
import {removeCartProduct}from '../redux/productSlice'
const Cart = () => {
  const cart = useSelector((state) => state.product.AllProduct); 
  const dispatch = useDispatch()


  const handleRemoveCart  = (id_product) => {
    dispatch(removeCartProduct(id_product))
  }
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="border p-4 rounded-md shadow">
                <img src={item.images} alt="" />
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-600">${item.price}</p>
              <button  onClick={() => handleRemoveCart(item)}>remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
