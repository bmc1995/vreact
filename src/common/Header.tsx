import { FC, PropsWithChildren } from "react";

export const Header: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <header style={{ paddingInline: 0 }}>{children}</header>;
};
