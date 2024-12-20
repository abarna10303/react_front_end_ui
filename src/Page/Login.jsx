import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useNavigate } from "react-router-dom";
import { commonStyles } from "./CommonStyles";

const useStyles = makeStyles({
  resendOtpContainer: {
    "& .MuiButton-root": {
      textTransform: "none",
      padding: "0px 10px !important",
    },
    "& .MuiButton-root:hover": {
      backgroundColor: "transparent !important",
    },
    textAlign: "end",
    marginTop: "20px",
  },
  registerButton: {
    textAlign: "center",
    marginTop: "20px",
    "& .MuiButton-root:hover": {
      backgroundColor: "transparent !important",
    },
  },
});

const Login = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const navigate = useNavigate();
  const initialState = {
    mobileNo: "",
    otpNo: "",
  };
  const [state, setState] = React.useState(initialState);
  const { mobileNo, otpNo } = state;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  console.log(state);

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <Box className={commonClasses.formContainer}>
      <Box className={commonClasses.formBox}>
        <Typography variant="h1" className={commonClasses.formTitle}>
          Login
        </Typography>
        <Box className={commonClasses.formInputFields}>
          <InputLabel>Mobile No</InputLabel>
          <TextField
            variant="outlined"
            name="mobileNo"
            placeholder="Enter Mobile No"
            type="number"
            value={mobileNo}
            onChange={handleInputChange}
          />
        </Box>
        <Box className={commonClasses.formInputFields}>
          <InputLabel>OTP No</InputLabel>
          <TextField
            variant="outlined"
            name="otpNo"
            placeholder="Enter OTP No"
            value={otpNo}
            onChange={handleInputChange}
          />
          <Box className={classes.resendOtpContainer}>
            <Button>Resend OTP</Button>
          </Box>
        </Box>
        <Box className={commonClasses.formButton}>
          <Button>Login</Button>
        </Box>
        <Box className={classes.registerButton}>
          <Button onClick={handleRegister}>Register Here</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
