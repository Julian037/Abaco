import React, { useState } from "react";
import useStyles from "./SignUpStyle";
import { Grid, Typography, Button } from "@mui/material";
import FormUserInformation from "../../components/FormUserInformation/FormUserInformation";
import axios from 'axios';
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const SignUp = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState({
    isValid: false,
    values: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    touched: {},
    errors: {},
  });

  const handleChange = (event) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const prevPage = () => {
    setPage((prevState) => prevState - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const nuevoUsuario = {
        nombre: formState.values.first_name,
        apellido: formState.values.last_name,
        email: formState.values.email,
        password: formState.values.password,
      };

      await axios.post('http://localhost:5000/api/usuarios/registro', nuevoUsuario);
      enqueueSnackbar("Usuario registrado correctamente.", { variant: "success" });

      setFormState({
        isValid: false,
        values: {
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        },
        touched: {},
        errors: {},
      });
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      enqueueSnackbar("Error al registrar el usuario. Por favor, intente nuevamente.", { variant: "error" });
    }
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.quoteContainer} item lg={6}>
          <div className={classes.quote}>
            <div className={classes.quoteInner}>
              <Typography className={classes.quoteText} variant="h1">
                Bienvenido a sistema Abaco
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid className={classes.content} item lg={6} xs={12}>
          <div className={classes.content}>
            <div className={classes.contentBody}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Typography className={classes.formTitle} variant="h3">
                  Crea tu cuenta
                </Typography>
                {page === 1 && (
                  <FormUserInformation
                    classes={classes}
                    formState={formState}
                    handleChange={handleChange}
                    setFormState={setFormState}
                    nextPage={nextPage}
                  />
                )}
                <Button Buttontype="submit" variant="contained" color="primary" fullWidth> 
                  Registrarse
                </Button>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
      <SnackbarProvider />
    </div>
  );
};

export default SignUp;
