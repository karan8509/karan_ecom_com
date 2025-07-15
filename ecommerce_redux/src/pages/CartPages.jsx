import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector((state) => state.product.AllProduct); 
  
  console.log("cart ----->", cart);

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
