import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {Shop} from "./pages/shop/Shop";
import {Cart} from "./pages/cart/Cart";
import {ShopContextProvider} from "./context/ShopContext";
import {Contact} from "./pages/Contact";
import Login from "./pages/login/Login";
function App() {
    return (
        <div className="App">
            <div className="App">
                <ShopContextProvider>
                    <Router>
                        <NavBar />
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/" element={<Shop />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </Router>
                </ShopContextProvider>
            </div>
        </div>
    );
}

export default App;
