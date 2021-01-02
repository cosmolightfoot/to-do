import React from "react";
import { useForm } from "react-hook-form";
import firebase from '../../firebase/firebase';

/** Material-UI Components */
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

/** Styles */
import useStyles from "./Form.styles";

/** Schema */
import { toDoSchema, toDoDefaults } from "./Form.schema";
import TextFieldRHF from "../TextFieldRHF/TextFieldRHF";
import { yupResolver } from "@hookform/resolvers/yup";

const ToDoForm = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit, watch, reset } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    resolver: yupResolver(toDoSchema),
    defaultValues: toDoDefaults,
  });

  const onSubmit = (formData) => {
    firebase.firestore().collection('todos').add(formData);
    reset(toDoDefaults)
  };

  console.log("ERRORS", errors);
  console.log("VALUES", watch());

  return (
    <Paper
      className={classes.root}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      elevation={4}
    >
      <input hidden ref={register} name="completed" />
      <input hidden ref={register} name="unnecessaryField" />
      <Typography variant="h4">Add a To-Do</Typography>
      <Divider fullwidth />
      <Box component='section' display="flex" flexDirection="column" alignItems="flex-start">
        <TextFieldRHF
          label="To Do Title"
          name="title"
          placeholder={"Any string here"}
          inputRef={register}
          errors={errors}
        />
        <Button className={classes.addPadding} variant='contained' color='primary' type="submit">Add To-Do</Button>
      </Box>
    </Paper>
  );
};

export default ToDoForm;
