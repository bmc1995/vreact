import { useForm, Controller, FieldValues } from "react-hook-form";
import { Box, Button, FormControl, FormLabel, Input } from "@mui/joy";

export const UploadsForm = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <FormLabel>Upload image</FormLabel>
        <Controller
          name="textFile"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} type="file" />}
        />
      </FormControl>

      <Button type="submit">Submit</Button>
    </Box>
  );
};
