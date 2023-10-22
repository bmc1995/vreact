import { Button } from "@mui/joy";
import Google from "../../assets/google-emblem.svg";

export const GoogleSignInBtn = () => {
  return (
    <Button
      startDecorator={<img width={"25px"} src={Google} />}
      variant="solid"
      sx={(theme) => ({
        justifyContent: "space-between",
        border: "1px solid transparent",
        ":hover": { border: "1px solid white" },
      })}
    >
      Sign in with Google
    </Button>
  );
};
