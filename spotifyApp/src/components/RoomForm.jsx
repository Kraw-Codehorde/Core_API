import { Paper, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import FormRoomName from "./form/FormRoomName";

const defaultValues = {
  name: "",
};

const RoomForm = () => {
  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: defaultValues,
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Paper
      style={{
        display: "grid",
      }}
    >
      <FormRoomName name="name" control={control} label="Name" />
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </Button>
      <Button onClick={() => reset()} variant={"outlined"}>
        Reset
      </Button>
    </Paper>
  );
};

export default RoomForm;
