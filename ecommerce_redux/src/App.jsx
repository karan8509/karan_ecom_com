import Cart from "./pages/CartPages";
import Home from "./pages/homePages";
import { Route, Routes } from "react-router-dom";
import Like from "./pages/LikePages";
import { Provider } from "react-redux";
import Store from "./redux/store";
const App = () => {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/like" element={<Like />} />
      </Routes>
    </Provider>
  );
};

export default App;
