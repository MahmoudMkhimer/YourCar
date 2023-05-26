import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "cart",
  initialState: { isVisible: false },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
  },
});
export const { toggle } = showCartSlice.actions;
export default showCartSlice.reducer;
