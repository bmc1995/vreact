import { FC, PropsWithChildren } from "react";

export const Main: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <main style={{ zIndex: "1", backgroundColor: "black" }}>{children}</main>
  );
};
