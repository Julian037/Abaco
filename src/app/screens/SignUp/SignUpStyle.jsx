// import { makeStyles } from "@material-ui/styles";
import { makeStyles } from "@mui/styles";
// import authBackground from "../../../assets/images/ImgBgTurbo2.png";

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
    backgroundColor: "#125285",
    padding: "30px 60px 30px 36px",
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
    overflowY: "overlay",
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
  formTitle: {
    marginTop: "50px",
    marginBottom: "12px",
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  formTypographyPolicy: {
    marginTop: "24px",
    marginBottom: "44px",
    display: "flex",
    alignItems: "center",
  },
  policyCheckbox: {
    marginLeft: "-14px",
  },
  signUpButton: {
    margin: theme.spacing(2, 0),
  },
  formInputPassword: {
    color: "#FD9A33",
  },
  links: {
    fontWeight: 500,
    letterSpacing: "-0.05px",
    lineHeight: "20px",
    marginTop: "24px",
    marginBottom: "44px",
  },
  formContinerButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#FFFFFF",
    borderRadius: "20px",
    borderWidth: "2px",
  },
  label: {
    backgroundColor: "#f4f6f8",
    padding: "0 5px",
  },
  formContainerDocument: {
    display: "flex",
    alignItems: "flex-end",
  },
  select: {
    marginRight: "10px",
    width: "90%",
  },
}));
export default useStyles;
