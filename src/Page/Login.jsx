import Box from "@mui/material/Box";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Button, InputLabel, TextField, Typography } from "@mui/material";

const useStyles = makeStyles({
  loginContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    border: "1px solid #ccc",
    padding: "30px",
    borderRadius: "10px",
    width: "90%",
    maxWidth: "400px",
    height: "auto",
    maxHeight: "90%",
    minWidth: "300px",
    margin: "auto",
    "@media (max-width: 600px)": {
      width: "95%",
      padding: "15px",
    },
    "@media (min-width: 1200px)": {
      width: "30%",
    },
  },
  loginTitle: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "32px",
  },
  inputFields: {
    "& .MuiFormLabel-root": {
      fontSize: "16px",
      marginBottom: "10px",
      fontWeight: "bold",
    },

    "& .MuiOutlinedInput-input": {
      padding: "10px",
      width: "calc(400px - 30px)",
    },
    marginBottom: "20px",
  },
  loginButton: {
    width: "calc(400px - 10px)",
    "& .MuiButton-root": {
      width: "100%",
      backgroundColor: "#ff5e33",
      color: "#fff",
      textTransform: "none",
      padding: "10px !important",
    },
  },
  resendOtpContainer: {
    "& .MuiButton-root": {
      textTransform: "none",
      padding: "0px 10px !important",
    },
    "& .MuiButton-root::hover": {
      backgroundColor: "transparent !important",
    },
    textAlign: "end",
    marginTop: "20px",
  },
});

const Login = () => {
  const classes = useStyles();
  const initialState = {
    mobileNo: "",
    otpNo: "",
  };
  const [state, setState] = React.useState(initialState);
  const { mobileNo, otpNo } = state;
  return (
    <Box className={classes.loginContainer}>
      <Box className={classes.loginBox}>
        <Typography variant="h1" className={classes.loginTitle}>
          Login
        </Typography>
        <Box className={classes.inputFields}>
          <InputLabel>Mobile No</InputLabel>
          <TextField
            variant="outlined"
            name="mobileNo"
            placeholder="Enter Mobile No"
            value={mobileNo}
          />
        </Box>
        <Box className={classes.inputFields}>
          <InputLabel>OTP No</InputLabel>
          <TextField
            variant="outlined"
            name="otpNo"
            placeholder="Enter OTP No"
            value={otpNo}
          />
          <Box className={classes.resendOtpContainer}>
            <Button>Resend OTP</Button>
          </Box>
        </Box>
        <Box className={classes.loginButton}>
          <Button>Login</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
