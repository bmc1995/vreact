import { ColorPaletteProp } from "@mui/joy";
import { addToast } from "../../../app/redux/slices/toastSlice";
import { generateUUID } from "../../utils/generateUUID";
import store from "../../../app/redux/store";

export const dispatchToast = (msg: string, color: ColorPaletteProp): void => {
  store.dispatch(
    addToast({
      color,
      msg,
      variant: "outlined",
      id: generateUUID(),
      duration: 5500,
    })
  );
};
