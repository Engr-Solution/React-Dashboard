import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import New from "./pages/New";
import Users from "./pages/Users";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Products from "./pages/Products";
import NewProduct from "./pages/NewProduct";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          {/* Users Routes */}
          <Route path="users">
            <Route index element={<Users />} />
            <Route path=":userid" element={<User />} />
            <Route path="new" element={<New />} />
          </Route>
          {/* Products Routes */}
          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":productId" element={<Product />} />
            <Route path="new" element={<NewProduct />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
