import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: {
    items: [],
    amount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.amount += action.payload.count;
        state.items.push(action.payload);
      } else {
        if (state.items[index].count + action.payload.count > 9) return;
        state.amount += action.payload.count;
        state.items[index].count += action.payload.count;
      }
      // console.log(index);
      //   state.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      console.log(index);
      if (state.items[index].count === 1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].count--;
      }
      state.amount--;
    },
    clearItem: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      state.amount -= state.items[index].count;
      state.items.splice(index, 1);
    },
    clearAll: (state, action) => {
      state.amount = 0;
      state.items.splice(0, state.items.length);
    },
  },
});

export const { addItem, removeItem, clearItem, clearAll } = itemsSlice.actions;

export default itemsSlice.reducer;
