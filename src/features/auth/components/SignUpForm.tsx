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
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
  Typography,
} from "@mui/joy";

import { generateOptionsFromEnum } from "../utils/generateOptionsFromEnum";
import { SignUpFormState, signUpFormReducer } from "../utils/reducers";
import { ReducerActionTypes } from "../utils/enums";
const initialSignUpFormState: SignUpFormState = {
  email: "",
  password: "",
  verifyPassword: "",
  firstName: "",
  lastName: "",
  country: "",
  cellPhone: "",
};

export const SignUpForm = () => {
  const [state, dispatch] = useReducer(
    signUpFormReducer,
    initialSignUpFormState
  );
  //Native event == 'ChangeEvent'
  const handleSelectChange = (field: string) => (_: any, value: any) => {
    dispatch({
      type: ReducerActionTypes.UPDATE,
      payload: { field, value },
    });
  };

  const handleChange =
    (field: string) => (e: BaseSyntheticEvent | InputEvent) => {
      dispatch({
        type: ReducerActionTypes.UPDATE,
        payload: { field, value: e.target.value },
      });
    };

  const handleSubmit = (e: BaseSyntheticEvent | SubmitEvent) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: ReducerActionTypes.SUBMIT });
  };

  return (
    <Card>
      <CardContent>
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
          Create Account
        </Typography>
        <Divider inset="none" />
        <Box
          component={"form"}
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "repeat(2, minmax(80px, 1fr))" },
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
          <Stack
            sx={{ gridColumn: "1/-1" }}
            direction={{ sm: "row" }}
            justifyContent={"space-between"}
            alignContent={"space-between"}
          >
            <FormControl>
              <FormLabel>Create Password</FormLabel>
              <Input
                autoComplete="new-password"
                type="password"
                placeholder="Password"
                onChange={handleChange("password")}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Verify Password</FormLabel>
              <Input
                autoComplete="new-password"
                type="password"
                onChange={handleChange("verifyPassword")}
              />
              <FormHelperText>
                <Typography startDecorator={<InfoOutlined />}>
                  Passwords must match.
                </Typography>
              </FormHelperText>
            </FormControl>
          </Stack>
          <Divider sx={{ gridColumn: "1/-1" }}>Optional</Divider>
          <FormControl>
            <FormLabel>First Name</FormLabel>
            <Input onChange={handleChange("firstName")} />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input onChange={handleChange("lastName")} />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select
              color="neutral"
              disabled={false}
              placeholder="Choose Country…"
              variant="outlined"
              onChange={handleSelectChange("country")}
            >
              {generateOptionsFromEnum()}
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Cell Phone</FormLabel>
            <Input
              onChange={handleChange("cellPhone")}
              placeholder="(555) 555-5555"
            />
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
      </CardContent>
    </Card>
  );
};
