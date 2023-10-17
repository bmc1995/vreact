import { Box } from "@mui/joy";
import { FC, PropsWithChildren } from "react";

export const Header: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Box
      sx={(theme) => ({
        paddingInline: 0,
        backgroundColor: theme.palette.neutral.softBg,
      })}
      component={"header"}
    >
      {children}
    </Box>
  );
};
