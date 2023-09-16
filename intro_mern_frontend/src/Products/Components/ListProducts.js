import React, { useState } from "react";
import Loading from "./Loading";

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        isLoading ? <Loading /> : 'mostrar resultado fetch'
    );
}

export default ListProducts;
