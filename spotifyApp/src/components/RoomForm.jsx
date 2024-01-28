import { Paper, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import FormRoomName from "./form/FormRoomName";
import { RadioGroup, Radio, FormControlLabel, Switch } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const defaultValues = {
  name: "",
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
});

const RoomForm = () => {
  const { handleSubmit, reset, control, setValue } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
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
      {/* Radio Group */}
      <Controller
        name="option"
        control={control}
        defaultValue="1"
        render={({ field }) => (
          <RadioGroup {...field} row>
            <FormControlLabel value="1" control={<Radio />} label="Option 1" />
            <FormControlLabel value="2" control={<Radio />} label="Option 2" />
          </RadioGroup>
        )}
      />
      {/* Switch Input */}
      <Controller
        name="switch"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControlLabel
            control={<Switch {...field} color="primary" />}
            label="Toggle Switch"
          />
        )}
      />
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
