import React from 'react';
import CardItem from './CardItem';
import Billing from './Billing';

const MyCart = () => {
    return (
        <div>
            <main class="py-16">
                <div class="container 2xl:px-8 px-2 mx-auto">
                    <h2 class="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div class="cartListContainer">
                        <div class="space-y-6">
                            <CardItem />
                        </div>
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
