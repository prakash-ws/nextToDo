import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "uiState",
  initialState: { formModal: false },
  reducers: {
    toggleFormModal: (state) => {
      state.formModal = !state.formModal;
    },
  },
});

export default uiSlice;

export const uiSliceActions = uiSlice.actions;
