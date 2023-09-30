import "./App.css";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import {NavBar} from "./components/NavBar";
import {Shop} from "./pages/shop/Shop";
import {Cart} from "./pages/cart/Cart";
import {ShopContextProvider} from "./context/ShopContext";
import { APIContextProvider } from "./context/APIContext";
import {Contact} from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import {useAuth} from "./hooks/useAuth";


function App() {
    const { isLogin, user, login, logout } = useAuth();

    return (
        <div className="App">
            <APIContextProvider>
                <ShopContextProvider>
                    <BrowserRouter>
                        <NavBar isLogin={isLogin} userData={user} login={login} logout={logout}/>
                        <Routes>
                            <Route path="/" element={
                                    <Shop isLogin={isLogin} userData={user} />
                                }
                            />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Routes>
                    </BrowserRouter>
                </ShopContextProvider>
            </APIContextProvider>
        </div>
    );
}

export default App;

