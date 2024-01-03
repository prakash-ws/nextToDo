import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./features/uiSlice";
import tableSlice from "./features/dataSlice";

const store = configureStore({
  reducer: {
    uiState: uiSlice.reducer,
    tableData: tableSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
