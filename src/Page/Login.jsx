import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import React, { useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useNavigate } from "react-router-dom";
import { commonStyles } from "./CommonStyles";
import { useDispatch, useSelector } from "react-redux";
import { otpLogin, otpLoginValidation } from "../store/thunck";
import {
  selectErrorMessage,
  selectOtpLoginData,
  selectSuccessMessage,
} from "../store/selector";
import { isEmpty } from "lodash";
import LoginLogo from "../Hackathonlogo.png";

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
  const dispatch = useDispatch();
  const successMessage = useSelector(selectSuccessMessage);
  const otpSuccessData = useSelector(selectOtpLoginData);
  const errorMessage = useSelector(selectErrorMessage);
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

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    dispatch(otpLogin(mobileNo));
  };

  const handleLoginOtp = () => {
    dispatch(otpLoginValidation(otpNo, mobileNo));
  };

  useEffect(() => {
    if (!isEmpty(otpSuccessData)) {
      navigate("/dashboard");
      localStorage.setItem("otpSuccessData", JSON.stringify(otpSuccessData));
    }
  }, [otpSuccessData]);

  return (
    <>
      <Box className={commonClasses.formContainer}>
        <Box className={commonClasses.formBox}>
          <Box className={commonClasses.imageLogoContainer}>
            <Box className={commonClasses.imageContainer}>
              <img src={LoginLogo} alt="LoginLogo" />
            </Box>
          </Box>
          <Typography variant="h1" className={commonClasses.formTitle}>
            D - Workers
          </Typography>
          {isEmpty(successMessage) && (
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
          )}
          {!isEmpty(successMessage) && (
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
          )}
          <Box className={commonClasses.formButton}>
            <Button
              onClick={isEmpty(successMessage) ? handleLogin : handleLoginOtp}
            >
              {isEmpty(successMessage) ? "Login" : "Login with OTP"}
            </Button>
          </Box>
          <Box className={classes.registerButton}>
            <Button onClick={handleRegister}>Register Here</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
