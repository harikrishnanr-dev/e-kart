import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
       //actions are provided inside reducers, logic to the update the this.state.first
       addToCart: (state, action) => {
        state.push(action.payload)
        },
         // to remove item from state
         removeFromCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        emptyCart: (state) => {
             return state=[]
         }
    }
})
export const { addToCart,removeFromCart,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;