import React from 'react';
import Header from './Header';
import AddButton from './AddButton';
import ListProducts from './ListProducts';


const ProductLayout = () => {


    return (
        <>
            <Header title="Products app" />

            <ListProducts />

            <AddButton />
        </>
    );
};

export default ProductLayout;
