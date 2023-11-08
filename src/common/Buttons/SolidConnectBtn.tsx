import { Button } from "@mui/joy";
import Solid from "../../assets/solid-emblem.svg";

export const SolidConnectBtn = () => {
  return (
    <Button
      startDecorator={<img alt="Solid protocol" height={"25px"} src={Solid} />}
      variant="outlined"
      color="neutral"
      size="sm"
      sx={{
        justifyContent: "space-between",
      }}
    >
      Connect Solid Pod
    </Button>
  );
  // backgroundColor: "hsla(256, 100.00%, 65.10%, 0.30)",
  // ":hover": {
  //   backgroundColor: "hsla(256, 100.00%, 65.10%, 0.45)",
  // },
  // ":active": { backgroundColor: "hsla(256, 100.00%, 65.10%, 0.60)" },
};
