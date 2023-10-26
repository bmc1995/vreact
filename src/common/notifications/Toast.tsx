import { useId, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ToastAlert,
  hideToast,
  removeToast,
} from "../../app/redux/slices/toastSlice";
import { Alert } from "@mui/joy";

export const Toast = ({ toastProps }: { toastProps: ToastAlert }) => {
  const { msg, color, variant, id, duration = 0 } = toastProps;
  const keyId = useId();
  const dispatch = useDispatch();
  const dd = useRef<HTMLDivElement | null>(null);

  function triggerTransition() {
    let opacity = dd.current!.style.opacity;
    opacity = !!Number(opacity) ? "0" : "1";
    return setTimeout(() => (dd.current!.style.opacity = opacity), 0);
  }

  useEffect(() => {
    const transitionId = triggerTransition();

    const hideId = setTimeout(() => {
      triggerTransition();
      dispatch(hideToast(id));
    }, duration);

    const removeId = setTimeout(() => {
      dispatch(removeToast(id));
    }, duration + 600);

    return () => {
      clearTimeout(hideId);
      clearTimeout(removeId);
      clearTimeout(transitionId);
    };
  }, []);

  return (
    <Alert
      key={keyId}
      ref={dd}
      color={color}
      variant={variant}
      sx={{
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
