import { Email, MyLocation, Phone } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/joy";

export default function UserProfile() {
  return (
    <Box>
      <Stack flexDirection={"row"}>
        <Avatar
          sx={{ width: { md: "200px" }, height: { md: "270px" } }}
          variant="outlined"
          //   alt="ACCOUNT NAME"
        ></Avatar>
        <Box flexGrow={1}>
          <Stack justifyContent={"center"} alignItems={"center"} gap={5}>
            <Typography aria-label="full name" fontSize={34}>
              Testerson McTester
            </Typography>
            <Typography aria-label="email address" startDecorator={<Email />}>
              test@example.com
            </Typography>
            <Typography aria-label="phone number" startDecorator={<Phone />}>
              +1 (555) 555-5555
            </Typography>
            <Typography aria-label="country" startDecorator={<MyLocation />}>
              United States
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
