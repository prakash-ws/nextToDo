import { useDispatch } from "react-redux";
import { tableActions } from "../features/dataSlice";
import { uiSliceActions } from "../features/uiSlice";
import { bindActionCreators } from "@reduxjs/toolkit";

const actions = {
  ...uiSliceActions,
  ...tableActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
