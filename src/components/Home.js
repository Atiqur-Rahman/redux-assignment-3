import React from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';

const Home = () => {
    return (
        <div>
            <main class="py-16">
                <div class="productWrapper">
                    <div class="productContainer" id="lws-productContainer">
                        <ProductItem />
                    </div>
                    <div>
                        <AddProduct />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
