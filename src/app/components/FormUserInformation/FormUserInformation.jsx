import React, { useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { Button, TextField, Typography, Link } from "@mui/material";
import handleMessage from "../../../helpers/handleMessage";

const FormUserInformation = ({
  classes,
  formState,
  handleChange,
  setFormState,
  nextPage,
  updateOnly,
}) => {
  const hasError = (field) =>
    !!(formState.touched[field] && formState.errors[field]);
  let errors;
  const formError = formState.errors;
  const firstLoad = useRef(true);

  useEffect(() => {
    if (
      formError[Object.keys(formError)[0]] === " " &&
      firstLoad.current === true
    ) {
      errors = formError;
      firstLoad.current = false;
    } else {
    }
    setFormState((formState) => ({
      ...formState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleSignUp = (event) => {
    const array = [];
    const users = localStorage.getItem("users");
    const obj = JSON.parse(users);
    array.push(formState.values);
    const newArray = array.concat(obj);
    const convertedArray = JSON.stringify(newArray);
    localStorage.setItem("users", convertedArray);
    handleMessage("Usuario creado correctamente.", "success", enqueueSnackbar);
  };

  return (
    <>
      <TextField
        className={classes.textField}
        error={hasError("first_name")}
        fullWidth
        helperText={
          hasError("first_name") ? formState.errors.first_name[0] : null
        }
        label="Nombres"
        name="first_name"
        onChange={handleChange}
        type="text"
        value={formState.values.first_name || ""}
      />
      <TextField
        className={classes.textField}
        error={hasError("last_name")}
        fullWidth
        helperText={
          hasError("last_name") ? formState.errors.last_name[0] : null
        }
        label="Apellidos"
        name="last_name"
        onChange={handleChange}
        type="text"
        value={formState.values.last_name || ""}
      />
      <TextField
        className={classes.textField}
        error={hasError("email")}
        fullWidth
        helperText={hasError("email") ? formState.errors.email[0] : null}
        label="Correo"
        name="email"
        onChange={handleChange}
        type="text"
        value={formState.values.email || ""}
      />
      <TextField
        className={classes.textField}
        error={hasError("password")}
        fullWidth
        helperText={hasError("password") ? formState.errors.password[0] : null}
        label="Contraseña"
        name="password"
        onChange={handleChange}
        type="text"
        value={formState.values.password || ""}
      />
      {!updateOnly && (
        <Typography variant="body2" className={classes.links}>
          ¿Ya tienes una cuenta?{" "}
          <Link underline="always" component={RouterLink} to="/signin">
            Ingresa aquí
          </Link>
        </Typography>
      )}
      <Button
        className={classes.signUpButton}
        color="primary"
        disabled={!formState.values.password?.length > 0}
        fullWidth
        onClick={handleSignUp}
        size="large"
        variant="contained"
      >
        Continuar
      </Button>
      <div>
        <SnackbarProvider />
      </div>
    </>
  );
};

export default FormUserInformation;
