// import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { makeStyles } from "@mui/styles";

// import authBackground from "../../../assets/images/ImgBgTurbo1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100%",
  },
  grid: {
    height: "100%",
  },
  quoteContainer: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  quote: {
    height: "100%",
    display: "flex",
    alignItems: "flex-end",
    // backgroundImage: `url(${authBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "100% 0%",
  },
  quoteInner: {
    // backgroundColor: "#125285",
    padding: "30px 60px 150px 96px",
    borderRadius: "0px 70px 70px 0px",
    flexBasis: "500px",
    marginBottom: "70px",
  },
  quoteText: {
    fontFamily: "VAG Rounded Std",
    color: theme.palette.white,
    fontWeight: 800,
    fontSize: "22px",
    letterSpacing: "-0.24px",
    lineHeight: "30px",
  },
  name: {
    marginTop: theme.spacing(3),
    color: theme.palette.white,
  },
  bio: {
    color: theme.palette.white,
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  contentHeader: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(2),
  },
  logoImage: {
    marginLeft: theme.spacing(4),
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  formTitle: {
    marginBottom: "12px",
  },
  form: {
    paddingLeft: 100,
    paddingRight: 200,
    paddingBottom: 15,
    flexBasis: 700,
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  formInputPassword: {
    color: "#FD9A33",
  },
  textField: {
    marginTop: "16px",
  },
  buttonSignIn: {
    // marginTop: "16px",
  },
  containerLinks: {
    marginTop: "24px",
    marginBottom: "40px",
  },
  formLinkLower: {
    marginTop: "8px",
  },
}));

export default useStyles;
