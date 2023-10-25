import { ColorPaletteProp, VariantProp } from "@mui/joy";
import { createSlice } from "@reduxjs/toolkit";

export interface ToastAlert {
  id: string;
  duration?: number;
  msg: string;
  color: ColorPaletteProp;
  variant: VariantProp;
  visibility?: "visible" | "hidden";
}

type ToastAddAction = {
  type: string;
  payload: ToastAlert;
};

type ToastRemoveAction = {
  type: string;
  payload: string;
};
type ToastHideAction = {
  type: string;
  payload: string;
};

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toastQueue: <ToastAlert[]>[],
  },
  reducers: {
    addToast: (state, action: ToastAddAction) => {
      state.toastQueue.push({
        ...action.payload,
      });
    },
    removeToast: (state, action: ToastRemoveAction) => {
      return {
        ...state,
        toastQueue: state.toastQueue.filter(
          (toast) => toast.id != action.payload
        ),
      };
    },
    hideToast: (state, action: ToastHideAction) => {
      const toast = state.toastQueue.find((t) => t.id == action.payload);

      if (toast) toast.visibility = "hidden";
    },
  },
});

export const { addToast, removeToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
