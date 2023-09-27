import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {Shop} from "./pages/shop/Shop";
import {Cart} from "./pages/cart/Cart";
import {ShopContextProvider} from "./context/ShopContext";
import { APIContextProvider } from "./context/APIContext";
import {Contact} from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Checkout from "./pages/checkout/Checkout";
function App() {
    return (
        <div className="App">
            <div className="App">
                <APIContextProvider>
                <ShopContextProvider>
                    <Router>
                        <NavBar />
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/" element={<Shop />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </Router>
                </ShopContextProvider>
                </APIContextProvider>
            </div>
        </div>
    );
}

export default App;
