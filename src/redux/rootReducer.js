import { combineReducers } from 'redux';
import pageReducer from './page/pageReducer';
import cartReducer from './carts/cartReducer';
import productReducer from './products/productReducer';

const rootReducer = combineReducers({
    pages: pageReducer,
    products: productReducer,
    carts: cartReducer,
});

export default rootReducer;
