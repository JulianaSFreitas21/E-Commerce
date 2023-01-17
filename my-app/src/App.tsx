import { Header } from "./common/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Pages } from "./pages/Pages";
import { Cart } from "./common/cart/Cart";
import { UserProvider } from "./context/UserProvider";
import { Footer } from "./common/footer/Footer";
import { User } from "./pages/User/User";
import { Vendor } from "./pages/Vendor/Vendor";
import { Track } from "./pages/Track";
import { Contact } from "./pages/Contact";

function App() {

  return (
    <UserProvider>
      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/pages" element={<Pages/>}/>
            <Route path="/user" element={<User/>}/>
            <Route path="/vendor" element={<Vendor/>}/>
            <Route path="/track" element={<Track/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
