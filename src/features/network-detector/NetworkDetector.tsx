import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";
import { dispatchToast } from "../../common/notifications/utils/dispatchToast";

export const NetworkDetector: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [isDisconnected, setDisconnectedStatus] = useState(false);
  const prevDisconnectionStatus = useRef(false);

  const handleConnectionChange = () => {
    setDisconnectedStatus(!navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleConnectionChange);
    window.addEventListener("offline", handleConnectionChange);

    if (isDisconnected) {
      dispatchToast("Internet Connection Lost.", "danger");
    } else if (prevDisconnectionStatus.current) {
      dispatchToast("Internet Connection Restored.", "success");
    }

    prevDisconnectionStatus.current = isDisconnected;

    return () => {
      window.removeEventListener("online", handleConnectionChange);
      window.removeEventListener("offline", handleConnectionChange);
    };
  }, [isDisconnected]);

  return <>{children}</>;
};
