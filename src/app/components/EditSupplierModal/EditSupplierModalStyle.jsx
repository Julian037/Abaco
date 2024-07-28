import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: "0px 16px 16px 0px",
  },

  cardContainer : {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },

  btnHeadSol: {
    width: '190px',
    height: '35px',
    backgroundColor: '#125285',
    '&:hover': {
      backgroundColor: '#1966a2',
    },
    borderRadius: '20px',
    boxShadow: '0px 2px 2px #00000029',
    [theme.breakpoints.down('xs')]: {
      width: '120px',
    },
    [theme.breakpoints.down('400')]: {
      marginTop: '10px',
      marginRight: '16px',
    },
  },

  textBtnHead2: {
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '19px',
    textDecoration: 'none',
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },

}));

export default useStyles;
