import { Routes,Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./routes/HomePage/HomePage";
import ShopPage from "./routes/ShopPage/ShopPage";
import Authentication from "./routes/SignIn/Authentication";
import CheckoutPage from "./routes/CheckoutPage/CheckoutPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />}/>
          <Route path="shop/*" element={<ShopPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="auth" element={<Authentication />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
