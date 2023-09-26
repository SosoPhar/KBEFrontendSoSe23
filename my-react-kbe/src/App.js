import "./App.css";
import { Routes, Route, BrowserRouter,} from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Shop } from "./pages/shop/Shop";
import { Cart } from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/ShopContext";
import { Contact } from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import SecuredPage from "./pages/SecuredPage";
import PrivateRoute from "./helpers/PrivateRoute";
import {useAuth} from "./hooks/useAuth";

function App() {
    const { isLogin, user, login, logout } = useAuth();

    return (
        <div className="App">
            <ShopContextProvider>
                <BrowserRouter>
                    <NavBar isLogin={isLogin} userData={user} login={login} logout={logout}/>
                    <Routes>
                        <Route path="/" element={<Shop />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route
                            path="/secured"
                            element={
                                <PrivateRoute isLogin={isLogin} login={login}>
                                    <SecuredPage />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </ShopContextProvider>
        </div>
    );
}

export default App;

