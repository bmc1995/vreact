import { Box } from "@mui/joy";
import { FC, PropsWithChildren } from "react";

export const Footer: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Box
      sx={{
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: -1,
        position: "fixed",
      }}
      component={"footer"}
    >
      {children}
    </Box>
  );
};
