import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import LikeProduct from "./component/LikeProduct";
import AddToCart from "./component/AddToCart";
import Home from "./pages/Home";
const App = () => {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home  />}/>
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/product-like" element={<LikeProduct />} />
      </Routes>
    </div>
  );
};

export default App;
