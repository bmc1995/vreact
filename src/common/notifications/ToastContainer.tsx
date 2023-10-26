import { Stack } from "@mui/joy";
import { useSelector } from "react-redux";
import { RootState } from "../../app/redux/store";
import { Toast } from "./Toast";

export const ToastContainer = () => {
  const { toastQueue } = useSelector((state: RootState) => state.toast);

  return (
    <Stack
      position={"fixed"}
      zIndex={1}
      bottom={25}
      left={25}
      display={toastQueue.length ? "flex" : "none"}
    >
      {toastQueue.map((alert) => (
        <Toast key={alert.id} toastProps={alert} />
      ))}
    </Stack>
  );
};
