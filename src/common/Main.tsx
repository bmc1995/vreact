import { Box } from "@mui/joy";
import { FC, PropsWithChildren } from "react";

export const Main: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        zIndex: "1",
        backgroundColor: theme.palette.background.backdrop,
      })}
      component={"main"}
    >
      {children}
    </Box>
  );
};
