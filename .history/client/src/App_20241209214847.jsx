import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/cartpage" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
