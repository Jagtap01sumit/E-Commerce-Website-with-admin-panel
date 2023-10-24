import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../features/product-list/productListSlice'
import authReducer from '../features/auth/authSlice'
import cartReduser from '../features/cart/cartSlice'
import orderReducer from '../features/order/orderSlice'
export const store = configureStore({
  reducer: {
    product: productReducer,
    auth:authReducer,
    cart:cartReduser,
    order:orderReducer,
  },
});
