import { Header } from "./common/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Pages } from "./pages/Pages";
import { Cart } from "./common/cart/Cart";
import { UserProvider } from "./context/UserProvider";
import { Footer } from "./common/footer/Footer";

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Pages/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
