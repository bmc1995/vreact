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
  Option,
  Select,
  Stack,
  Typography,
} from "@mui/joy";

export const SignUpForm = () => {
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
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            console.log(JSON.stringify(formJson));
          }}
        >
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              autoComplete="email"
              type="email"
              placeholder="jane@example.com"
              required
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
              />
            </FormControl>
            <FormControl>
              <FormLabel>Verify Password</FormLabel>
              <Input autoComplete="new-password" type="password" />
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
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Last Name</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Select
              color="neutral"
              disabled={false}
              placeholder="Choose Country…"
              variant="outlined"
            >
              <Option value={"United States"}>United States</Option>
              <Option value={"Canada"}>Canada</Option>
              <Option value={"France"}>France</Option>
              <Option value={"Mexico"}>Mexico</Option>
              <Option value={"Russia"}>Russia</Option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Cell Phone</FormLabel>
            <Input placeholder="(555) 555-5555" />
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
