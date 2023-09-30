import { createContext, useEffect, useState, useContext } from "react";
import { PRODUCTS } from "../pages/shop/products";
import { APIContext } from "./APIContext";

export const ShopContext = createContext(null);

const getDefaultCart = (products) => {
    let cart = {};
    for (let i = 0; i < products.length; i++) {
        cart[products[i].id] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const {products} = useContext(APIContext);

    const [cartItems, setCartItems] = useState(getDefaultCart(products));

    useEffect(() => {
        setCartItems(getDefaultCart(products));
    }, [products])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const key in cartItems) {
            if (cartItems[key] > 0) {
                let itemInfo = products.find((product) => product.id === Number(key));
                totalAmount += cartItems[key] * itemInfo.price;
            }
        }
        return totalAmount;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    };

    const checkout = () => {
        setCartItems(getDefaultCart(products));
    };

    const contextValue = {
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
    };

    

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};