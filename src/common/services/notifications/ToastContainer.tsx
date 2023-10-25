import { Alert, Stack } from "@mui/joy";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/redux/store";
import { useEffect, useRef } from "react";
import {
  ToastAlert,
  hideToast,
  removeToast,
} from "../../../app/redux/slices/toastSlice";

export const Toast = ({ toastProps }: { toastProps: ToastAlert }) => {
  const { msg, color, variant, visibility, id, duration = 0 } = toastProps;
  const dispatch = useDispatch();
  const dd = useRef<HTMLDivElement | null>(null);

  const triggerTransition = () => {
    const opacity = dd.current!.style.opacity;
    !!Number(opacity) ? "0" : "1";
    setTimeout(() => (dd.current!.style.opacity = "1"), 0);
  };
  const hideTimer = () =>
    setTimeout(() => {
      triggerTransition();
      dispatch(hideToast(id));
    }, duration);

  const removeTimer = () =>
    setTimeout(() => {
      dispatch(removeToast(id));
    }, duration + 600);

  useEffect(() => {
    triggerTransition();
    const hideId = hideTimer();
    const removeId = removeTimer();

    return () => {
      clearTimeout(hideId);
      clearTimeout(removeId);
    };
  }, []);

  return (
    <Alert
      ref={dd}
      color={color}
      variant={variant}
      sx={{
        // visibility,
        opacity: 0,
        transitionProperty: "all",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      {msg}
    </Alert>
  );
};

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
