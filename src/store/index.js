import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/index';
import productsReducer from './slices/data';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
    },
});

export default store;