import React from 'react';
import CardItem from './CardItem';
import Billing from './Billing';
import { useSelector } from 'react-redux';

const MyCart = () => {
    const carts = useSelector((state) => state.carts);
    // console.log(carts);

    return (
        <div>
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <div className="space-y-6">{carts.length ? carts.map((product) => <CardItem key={product.id} product={product} />) : <div>No Product In Your Cart !!!!!!</div>}</div>
                        <div>
                            <Billing />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MyCart;
