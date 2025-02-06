import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import BillPage from "./pages/BillPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/bills" element={<BillPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
