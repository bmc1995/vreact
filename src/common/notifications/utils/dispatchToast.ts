import { ColorPaletteProp } from "@mui/joy";
import { useDispatch } from "react-redux";
import { addToast } from "../../../app/redux/slices/toastSlice";
const dispatch = useDispatch();

export const dispatchToast = (msg: string, color: ColorPaletteProp): void => {
  dispatch(
    addToast({
      color,
      msg,
      variant: "outlined",
      id: generateUUID(),
      duration: 8000,
    })
  );
};
