import { Box } from "@mui/joy";
import { FC, PropsWithChildren } from "react";
import NavigationBar from "../features/navbar/components/NavigationBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Stack } from "@mui/system";

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Box height={"inherit"}>
      <Header>
        <NavigationBar />
      </Header>
      <Main>{children}</Main>
      <Footer>{"<3"}</Footer>
    </Box>
  );
};
