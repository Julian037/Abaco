import React, { useState, useEffect } from "react";
import useStyles from "./SignInStyle";
import { Link as RouterLink } from "react-router-dom";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Schema from "validate";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import handleMessage from "../../../helpers/handleMessage";

import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Link,
} from "@mui/material";

const user = new Schema({
  email: {
    required: true,
    length: { min: 3, max: 32 },
    email: { message: "No parece ser un correo válido" },
  },

  password: {
    required: true,
    length: { min: 3, max: 32 },
    presence: { allowEmpty: false, message: "Introduce tu contraseña" },
  },
});

const SignIn = () => {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    active: {},
    errors: {},
  });

  console.log("formState", formState);
  let [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((showPassword = !showPassword));
  };

  useEffect(() => {
    const errors = user.validate(formState.values);

    setFormState((formState) => ({
      ...formState,
      isValid: !errors,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    event.persist();

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSignIn = (event) => {
    const users = localStorage.getItem("users");
    const obj = JSON.parse(users);

    const emailSearched = formState.values.email;
    const passwordSearched = formState.values.password;

    const isUser = obj.some((object) => {
      return (
        object?.email === emailSearched && object?.password === passwordSearched
      );
    });

    if (isUser) {
      handleMessage(
        "Estableciendo conexión, por favor espere.",
        "success",
        enqueueSnackbar
      );
    } else {
      handleMessage(
        "Algo salió mal. Parece que el usuario o la contraseña que ingresaste no son correctos.",
        "error",
        enqueueSnackbar
      );
    }
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={6}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography
                align="left"
                className={classes.quoteText}
                variant="h1"
              >
                Bienvenido a sistema Abaco
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={6} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <div className={classes.form}>
                <Typography className={classes.formTitle} variant="h3">
                  Ingreso a tu cuenta
                </Typography>
                <TextField
                  style={{ marginTop: "10px" }}
                  inputProps={{ autocomplete: "off" }}
                  className={classes.textField}
                  error={hasError("email")}
                  fullWidth
                  helperText={
                    hasError("email") ? formState.errors.email[0] : null
                  }
                  label="Correo"
                  name="email"
                  onChange={handleChange}
                  type="text"
                  value={formState.values.email || ""}
                  variant="standard"
                />
                <FormControl style={{ marginTop: "20px" }} fullWidth>
                  <InputLabel style={{ marginLeft: "-13px" }}>
                    Contraseña
                  </InputLabel>
                  <Input
                    className={showPassword ? null : classes.formInputPassword}
                    inputProps={{ autocomplete: "new-password" }}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    value={formState.values.password || ""}
                    error={hasError("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div className={classes.containerLinks}>
                  <Typography variant="body2">
                    ¿Olvidaste tu contraseña?{" "}
                    <Link
                      underline="always"
                      component={RouterLink}
                      // to="/password"
                    >
                      Haz clic aqui
                    </Link>
                  </Typography>
                  <Typography variant="body2" className={classes.formLinkLower}>
                    ¿No tienes una cuenta aún?{" "}
                    <Link
                      underline="always"
                      component={RouterLink}
                      to="/signup"
                    >
                      Regístrate
                    </Link>
                  </Typography>
                </div>
                <Button
                  className={classes.buttonSignIn}
                  color="primary"
                  disabled={
                    !formState.values.email !== 0 && !formState.values.password
                  }
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  onClick={handleSignIn}
                >
                  Ingresar
                </Button>
              </div>
              <div>
                <SnackbarProvider />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignIn;
