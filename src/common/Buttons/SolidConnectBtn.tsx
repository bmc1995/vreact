import { Button } from "@mui/joy";
import Solid from "../../assets/solid-emblem.svg";

export const SolidConnectBtn = () => {
  return (
    <Button
      startDecorator={<img width={"25px"} src={Solid} />}
      variant="solid"
      sx={(theme) => ({
        justifyContent: "space-between",
        backgroundColor: "#7c4dff",
        border: "1px solid #7c4dff",
        ":hover": { border: "1px solid white", backgroundColor: "#7c4dff" },
        ":active": { backgroundColor: "#744ce1" },
      })}
    >
      Connect Pod
    </Button>
  );
};
