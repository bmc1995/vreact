import { FC, PropsWithChildren } from "react";

export const Footer: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <footer>{children}</footer>;
};
