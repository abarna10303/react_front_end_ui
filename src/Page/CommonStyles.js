import { makeStyles } from "@mui/styles";

export const commonStyles = makeStyles({
  formContainer: {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiButton-root": {
      textTransform: "none",
    },
  },
  formBox: {
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
  formTitle: {
    textAlign: "center",
    marginBottom: "20px !important",
    fontSize: "32px !important",
  },
  formInputFields: {
    "& .MuiFormLabel-root": {
      fontSize: "16px",
      marginBottom: "10px",
      fontWeight: "bold",
    },

    "& .MuiOutlinedInput-input": {
      padding: "10px",
      width: "calc(400px - 30px)",
    },
    marginBottom: "25px",
  },
  formButton: {
    width: "calc(400px - 10px)",
    "& .MuiButton-root": {
      width: "100%",
      backgroundColor: "#737373c4",
      color: "#fff",
      textTransform: "none",
      padding: "10px !important",
      fontSize: "16px !important",
    },
  },
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
  imageContainer: {
    height: "100px",
    width: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& img": { width: "100%", objectFit: "contain" },
  },
  imageLogoContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
});
