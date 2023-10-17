import { InfoOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Typography,
} from "@mui/joy";

export const SignUpForm = () => {
  return (
    <Card>
      <Typography level="title-lg" startDecorator={<InfoOutlined />}>
        Create Account
      </Typography>
      <Divider inset="none" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          console.log(JSON.stringify(formJson));
        }}
      >
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
            gap: 1.5,
          }}
        >
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="jane@example.com" required />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Password.." />
          </FormControl>
          <FormControl>
            <FormLabel>Verify Password</FormLabel>
            <Input />
            <FormHelperText>
              <Typography startDecorator={<InfoOutlined />}>
                Passwords must match.
              </Typography>
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Country</FormLabel>
            <Input />
          </FormControl>
          <FormControl>
            <FormLabel>Cell Phone</FormLabel>
            <Input inputMode="tel" placeholder="(555) 555-5555" />
          </FormControl>
          <CardActions buttonFlex={1} sx={{ gridColumn: "1/-1" }}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
            <Button color="danger" variant="outlined">
              Cancel
            </Button>
          </CardActions>
        </CardContent>
      </form>
    </Card>
  );
};
