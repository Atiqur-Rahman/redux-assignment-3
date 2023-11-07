import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from './actionTypes';
import { initailState } from './initailState';

const nextId = (products) => {
    return products.reduce((id, product) => Math.max(id, product.id), -1) + 1;
};

const productReducer = (state = initailState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [
                ...state,
                {
                    id: nextId(state),
                    ...action.payload,
                    price: parseInt(action.payload.price),
                    quantity: parseInt(action.payload.quantity),
                },
            ];

        case ADD_QUANTITY:
            return state.map((product) => {
                if (product.id === action.paylaod.productId) {
                    return {
                        ...product,
                        quantity: product.quantity + action.payload.quantity,
                    };
                } else {
                    return product;
                }
            });

        case REMOVE_QUANTITY:
            return state.map((product) => {
                if (product.id === action.payload) {
                    return {
                        ...product,
                        quantity: product.quantity - 1,
                    };
                } else {
                    return product;
                }
            });

        default:
            return state;
    }
};

export default productReducer;
