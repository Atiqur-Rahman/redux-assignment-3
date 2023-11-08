import React from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';
import { useSelector } from 'react-redux';

const Home = () => {
    const products = useSelector((state) => state.products);

    return (
        <div>
            <main className="py-16">
                <div className="productWrapper">
                    <div className="productContainer" id="lws-productContainer">
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))}
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
