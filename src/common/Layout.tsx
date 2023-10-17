import { Box } from "@mui/joy";
import { FC, PropsWithChildren } from "react";
import NavigationBar from "../features/navbar/components/NavigationBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";

export const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <Box height={"inherit"}>
      <Header>
        <NavigationBar />
      </Header>
      <Main>{children}</Main>
      <Footer>{"This is a footer"}</Footer>
    </Box>
  );
};
