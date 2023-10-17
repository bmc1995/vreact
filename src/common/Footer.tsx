import { Box } from "@mui/joy";
import { FC, PropsWithChildren } from "react";

export const Footer: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        zIndex: -1,
        height: "5rem",
        borderTop: "2px solid white",
        backgroundColor: theme.palette.neutral.softBg,
      })}
      component={"footer"}
    >
      {children}
    </Box>
  );
};
