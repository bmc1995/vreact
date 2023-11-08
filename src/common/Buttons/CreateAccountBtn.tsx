import { Button } from "@mui/joy";
import viteLogo from "/vite.svg";

export const CreateAccountBtn = () => {
  return (
    <Button
      startDecorator={<img alt="vite" width={"25px"} src={viteLogo} />}
      variant="outlined"
      color="neutral"
      size="sm"
      sx={{
        justifyContent: "space-between",
      }}
    >
      Create Account
    </Button>
  );
};
