const handleMessage = (msg, type, enqueueSnackbar) => {
  enqueueSnackbar(msg, {
    variant: type,
    preventDuplicate: true,
    autoHideDuration: 5000,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center",
    },
  });
};

export default handleMessage;
