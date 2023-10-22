import { BaseSyntheticEvent, useReducer } from "react";
import { InfoOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/joy";
import { LoginFormState, loginFormReducer } from "../utils/reducers";
import { ReducerActionTypes } from "../utils/enums";
import { SolidConnectBtn } from "../../../common/Buttons/SolidConnectBtn";
import { GoogleSignInBtn } from "../../../common/Buttons/GoogleSignInBtn";
import { CreateAccountBtn } from "../../../common/Buttons/CreateAccountBtn";

const initialState: LoginFormState = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [state, dispatch] = useReducer(loginFormReducer, initialState);

  const handleSubmit = (e: BaseSyntheticEvent | SubmitEvent) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: ReducerActionTypes.SUBMIT });
  };

  const handleChange =
    (field: string) => (e: BaseSyntheticEvent | InputEvent) => {
      dispatch({
        type: ReducerActionTypes.UPDATE,
        payload: { field, value: e.target.value },
      });
    };

  return (
    <Card>
      <CardContent>
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
          Login
        </Typography>
        <Divider inset="none" />
        <Box
          component={"form"}
          sx={{
            display: "grid",
            gap: "1.5rem",
          }}
          onSubmit={handleSubmit}
        >
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              autoComplete="email"
              type="email"
              placeholder="jane@example.com"
              onChange={handleChange("email")}
              //   required
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleChange("password")} />
          </FormControl>
          <CardActions buttonFlex={1} sx={{ gridColumn: "1/-1" }}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
            <Button color="danger" variant="outlined">
              Cancel
            </Button>
          </CardActions>
        </Box>
        <Divider inset="none">OR</Divider>
        <Stack spacing={1} justifyContent={"space-around"}>
          <CreateAccountBtn />
          <SolidConnectBtn />
          <GoogleSignInBtn />
        </Stack>
      </CardContent>
    </Card>
  );
};
