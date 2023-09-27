import {createContext, useState} from "react";

import { getAllProducts, createProduct, deleteProduct } from "../api/APICaller";

export const APIContext = createContext(null);



export const APIContextProvider = (props) => {

    const [products, setProducts] = useState([]);

    const [ping, setPing] = useState(false);
    
    const fetchAllProducts = async () => {
        try {
            const data = await getAllProducts();
            console.log(data);
            if(data.length != products.length) {
                setProducts(data);
                setPing(!ping);
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    const createOneProduct = async (product) => {
        try {
            const data = await createProduct(product);
            setPing(!ping);

        } catch (error) {
            console.error(error);
        }
    }       

    const deleteOneProduct = async (id) => {
        try {
            const data = await deleteProduct(id);
            setPing(!ping);

        } catch (error) {
            console.error(error);
        }
    }
    

    const contextValue = {
        products,
        ping,
        fetchAllProducts,
        createOneProduct,
        deleteOneProduct,
    
    };


    return (
        <APIContext.Provider value={contextValue}>
            {props.children}
        </APIContext.Provider>
    );
};