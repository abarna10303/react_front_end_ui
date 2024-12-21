import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { commonStyles } from "./CommonStyles";
import { makeStyles } from "@mui/styles";
import { indianStatesOptions, typeOptions } from "../Constants/Constants";
import { useDispatch } from "react-redux";
import { postUserDetails } from "../store/thunck";
import LoginLogo from "../Hackathonlogo.png";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  registerBox: {
    minWidth: "700px",
    "@media (min-width: 1200px)": {
      width: "50% !important",
    },
  },
  inputFields: {
    "& .MuiFormLabel-root": {
      fontSize: "16px",
      marginBottom: "10px",
      fontWeight: "bold",
    },

    "& .MuiOutlinedInput-input": {
      padding: "10px",
      width: "calc(350px - 30px)",
    },
    marginBottom: "20px",
  },
  dropDownFields: {
    "& .MuiOutlinedInput-input": { paddingRight: "0px !important" },
  },
  inputFieldContainer: {
    display: "flex",
    gap: "20px",
  },
  registerBtnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
});

const RegisterHere = () => {
  const dispatch = useDispatch();
  const commonClasses = commonStyles();
  const classes = useStyles();
  const navigate = useNavigate();
  const registerInitialState = {
    fullName: "",
    lastName: "",
    mobileNo: "",
    type: "",
    homeAddress: "",
    city: "",
    state: "",
    pincode: "",
  };
  const [registerState, setRegisterState] =
    React.useState(registerInitialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRegisterState((prevState) => ({ ...prevState, [name]: value }));
  };

  const postData = async () => {
    await dispatch(postUserDetails(registerState));
    setRegisterState(registerInitialState);
    navigate("/login");
  };
  return (
    <Box className={commonClasses.formContainer}>
      <Box className={`${commonClasses.formBox} ${classes.registerBox}`}>
        <Box className={commonClasses.imageLogoContainer}>
          <Box className={commonClasses.imageContainer}>
            <img src={LoginLogo} alt="LoginLogo" />
          </Box>
        </Box>
        <Typography variant="h1" className={commonClasses.formTitle}>
          D - Workers
        </Typography>
        <Box className={classes.inputFieldContainer}>
          <Box className={classes.inputFields}>
            <InputLabel>Full Name</InputLabel>
            <TextField
              variant="outlined"
              name="fullName"
              placeholder="Enter FullName"
              value={registerState["fullName"]}
              onChange={handleInputChange}
            />
          </Box>
          <Box className={classes.inputFields}>
            <InputLabel>Last Name</InputLabel>
            <TextField
              variant="outlined"
              name="lastName"
              placeholder="Enter Last Name"
              value={registerState["lastName"]}
              onChange={handleInputChange}
            />
          </Box>
        </Box>
        <Box className={classes.inputFieldContainer}>
          <Box className={classes.inputFields}>
            <InputLabel>Mobile No</InputLabel>
            <TextField
              variant="outlined"
              name="mobileNo"
              placeholder="Enter Mobile No"
              value={registerState["mobileNo"]}
              onChange={handleInputChange}
            />
          </Box>
          <Box className={`${classes.inputFields} ${classes.dropDownFields}`}>
            <InputLabel>Type</InputLabel>
            <Select
              name="type"
              placeholder="Enter Type"
              value={registerState["type"]}
              onChange={handleInputChange}
            >
              {typeOptions.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Box className={classes.inputFieldContainer}>
          <Box className={classes.inputFields}>
            <InputLabel>Home Address</InputLabel>
            <TextField
              variant="outlined"
              name="homeAddress"
              placeholder="Enter Home Address"
              value={registerState["homeAddress"]}
              onChange={handleInputChange}
            />
          </Box>
          <Box className={classes.inputFields}>
            <InputLabel>city</InputLabel>
            <TextField
              variant="outlined"
              name="city"
              placeholder="Enter city"
              value={registerState["city"]}
              onChange={handleInputChange}
            />
          </Box>
        </Box>
        <Box className={classes.inputFieldContainer}>
          <Box className={`${classes.inputFields} ${classes.dropDownFields}`}>
            <InputLabel>State</InputLabel>
            <Select
              name="state"
              placeholder="Enter State"
              value={registerState["state"]}
              onChange={handleInputChange}
            >
              {indianStatesOptions.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box className={classes.inputFields}>
            <InputLabel>pincode</InputLabel>
            <TextField
              variant="outlined"
              name="pincode"
              placeholder="Enter pincode"
              value={registerState["pincode"]}
              onChange={handleInputChange}
            />
          </Box>
        </Box>
        <Box
          className={`${commonClasses.formButton} ${classes.registerBtnContainer}`}
        >
          <Button onClick={() => postData()}>Register</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterHere;
