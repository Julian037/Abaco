import React, { useState } from "react";
import useStyles from "./SignUpStyle";
import { Grid, Typography } from "@mui/material";
import FormUserInformation from "../../components/FormUserInformation/FormUserInformation";

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

  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const prevPage = () => {
    setPage((prevState) => prevState - 1);
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
              <form className={classes.form}>
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
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
