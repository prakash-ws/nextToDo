import { ITableData } from "@/types/types";
import { createSlice, current } from "@reduxjs/toolkit";
interface IState {
  tableData: ITableData[];
  formData: ITableData;
}
const initialState: IState = {
  tableData: [],
  formData: {
    name: "",
    price: 0,
    description: "",
    id: 0,
    disabled: false,
  },
};
const tableSlice = createSlice({
  name: "tableData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.tableData = action.payload;
    },
    addData: (state, action) => {
      const isExists = state.tableData.find(
        (data) => data.id === action.payload.id
      );

      if (isExists) {
        state.tableData = [
          ...state.tableData.filter((data) => data.id !== action.payload.id),
          action.payload,
        ];
      } else {
        state.tableData.push({
          ...action.payload,
          id: new Date().getTime(),
          disabled: false,
        });
      }

      state.formData = initialState.formData;
    },
    removeData: (state, action) => {
      state.tableData = state.tableData.filter(
        (data) => data.id !== action.payload
      );
    },
    toggleDisableData: (state, action) => {
      const selected = state.tableData.find((t) => t.id === action.payload);
      if (selected) {
        selected.disabled = !selected.disabled;
      }
    },
    setFormValues: (state, action) => {
      state.formData = { ...action.payload };
    },
  },
});

export default tableSlice;

export const tableActions = tableSlice.actions;
