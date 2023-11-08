import { z } from "zod";
import UserSettingsFormSchema from "../utils/zod/UserSettingsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoOutlined } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  CardActions,
} from "@mui/joy";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

export const UserSettingsForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
  } = useForm<z.infer<typeof UserSettingsFormSchema>>({
    resolver: zodResolver(UserSettingsFormSchema),
    defaultValues: {
      email: "test@example.com",
      cellPhone: "+1 (222)-333-4444",
      country: "United States",
      firstName: "Bobby",
      lastName: "Boi",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof UserSettingsFormSchema>> = (
    data
  ) => console.log(data);

  return (
    <Card>
      <CardContent>
        <Typography level="title-lg" startDecorator={<InfoOutlined />}>
          User Settings
        </Typography>
        <Divider inset="none" />
        <Box
          width={"600px"}
          component={"form"}
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "repeat(2, minmax(80px, 1fr))" },
            gap: "1.5rem",
          }}
          onSubmit={handleSubmit(onSubmit, console.error)}
        >
          <FormControl error={!!errors.firstName}>
            <FormLabel>First Name</FormLabel>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.firstName && (
              <FormHelperText>{errors.firstName.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl error={!!errors.lastName}>
            <FormLabel>Last Name</FormLabel>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.lastName && (
              <FormHelperText>{errors.lastName.message}</FormHelperText>
            )}
          </FormControl>
          <FormControl error={!!errors.email}>
            <FormLabel>Email</FormLabel>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.email && (
              <FormHelperText>{errors.email.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors.cellPhone}>
            <FormLabel>Cell Phone</FormLabel>
            <Controller
              name="cellPhone"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.cellPhone && (
              <FormHelperText>{errors.cellPhone.message}</FormHelperText>
            )}
          </FormControl>

          <FormControl error={!!errors.country}>
            <FormLabel>Country</FormLabel>
            <Controller
              name="country"
              control={control}
              render={({ field }) => <Input {...field} />}
            />
            {errors.country && (
              <FormHelperText>{errors.country.message}</FormHelperText>
            )}
          </FormControl>
          <CardActions>
            <Button disabled={!isDirty} type="submit">
              Save
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};
