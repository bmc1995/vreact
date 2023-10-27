import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastAlert, removeToast } from "../../app/redux/slices/toastSlice";
import { Alert } from "@mui/joy";
import { Close } from "@mui/icons-material";

export const Toast = ({ toastProps }: { toastProps: ToastAlert }) => {
  const { msg, color, variant, id, duration = 0 } = toastProps;

  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();

  const hideTimerIdRef = useRef<number | null>(null);
  const removeTimerIdRef = useRef<number | null>(null);

  function handleClickRemove() {
    if (hideTimerIdRef.current) clearTimeout(hideTimerIdRef.current);
    setOpacity(0);
    hideTimerIdRef.current = setTimeout(() => {
      removeTimerIdRef.current = setTimeout(() => {
        dispatch(removeToast(id));
      }, 50);
    }, 200);
  }

  useEffect(() => {
    setOpacity(1);
    if (duration > 0) {
      hideTimerIdRef.current = setTimeout(() => {
        handleClickRemove();
      }, duration);
    }

    return () => {
      if (hideTimerIdRef.current) clearTimeout(hideTimerIdRef.current);
      if (removeTimerIdRef.current) clearTimeout(removeTimerIdRef.current);
    };
  }, [dispatch, duration, id]);

  return (
    <Alert
      endDecorator={
        <Close
          onClick={handleClickRemove}
          cursor={"pointer"}
          accentHeight={"240px"}
          sx={{
            border: "1px solid gray",
            borderRadius: "2px",
            ":hover": { color: "ButtonText" },
            ":active": { borderColor: "ButtonFace" },
          }}
        />
      }
      style={{
        opacity,
        transitionProperty: "opacity",
        transitionDuration: "0.3s",
        transitionTimingFunction: "ease-in-out",
      }}
      color={color}
      variant={variant}
    >
      {msg}
    </Alert>
  );
};
