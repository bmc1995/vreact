import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  ToastAlert,
  hideToast,
  removeToast,
} from "../../app/redux/slices/toastSlice";
import { Alert } from "@mui/joy";

export const Toast = ({ toastProps }: { toastProps: ToastAlert }) => {
  const { msg, color, variant, id, duration = 0 } = toastProps;
  const dispatch = useDispatch();
  const nodeRef = useRef<HTMLDivElement | null>(null);

  function triggerTransition() {
    let opacity = nodeRef.current!.style.opacity;
    opacity = !!Number(opacity) ? "0" : "1";
    return setTimeout(() => (nodeRef.current!.style.opacity = opacity));
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
      ref={nodeRef}
      color={color}
      variant={variant}
      sx={{
        opacity: 0,
        transitionProperty: "opacity",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease-in-out",
      }}
    >
      {msg}
    </Alert>
  );
};
