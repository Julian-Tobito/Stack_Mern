import React, { useState, useEffect } from "react";
import { getProducts } from "../Services";
import Loading from "./Loading";



const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function loadProducts() {
            const response = await getProducts()
            console.log(response)

            if (response.status === 200) {
                setProducts(response.data.products)

            }
        }
        loadProducts()
    }, []);



    return (
        isLoading ? <Loading /> : 'mostrar resultado fetch'
    );
}

export default ListProducts;
