import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addToast } from "../../app/redux/slices/toastSlice";

export const NetworkDetector: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [isDisconnected, setDisconnectedStatus] = useState(false);
  const prevDisconnectionStatus = useRef(false);

  const dispatch = useDispatch();

  const handleConnectionChange = () => {
    setDisconnectedStatus(!navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);

    if (isDisconnected) {
      dispatch(
        addToast({
          color: "danger",
          msg: "Internet Connection Lost",
          variant: "outlined",
          id: Math.floor(Math.random() * 10000).toString(),
          duration: 8000,
        })
      );
    } else if (prevDisconnectionStatus.current) {
      dispatch(
        addToast({
          color: "success",
          msg: "Internet Connection Restored",
          variant: "outlined",
          id: Math.floor(Math.random() * 10000).toString(),
          duration: 8000,
        })
      );
    }

    prevDisconnectionStatus.current = isDisconnected;

    return () => {
      window.removeEventListener("online", handleConnectionChange);
      window.removeEventListener("offline", handleConnectionChange);
    };
  }, [isDisconnected]);

  return <>{children}</>;
};
