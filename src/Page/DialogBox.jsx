import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  dialogContainer: {
    "& .MuiTypography-root": {
      fontSize: "16px",
      marginBottom: "10px",
    },
  },
  formTitle: {
    textAlign: "center",
    fontSize: "20px !important",
  },
});

const DialogBox = (props) => {
  const { open, handleClose, selectedJob } = props;
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle></DialogTitle>
      <Typography variant="h1" component="h2" className={classes.formTitle}>
        Job Details
      </Typography>
      <DialogContent>
        <Box className={classes.dialogContainer}>
          <Typography>Job Title: {selectedJob.jobTitle}</Typography>
          <Typography>Job Description: {selectedJob.jobDescription}</Typography>
          <Typography>Amount: ₹ {selectedJob.amount}</Typography>
          <Typography>Location: {selectedJob.jobDescription}</Typography>
          <Typography>Pincode: {selectedJob.pincode}</Typography>
          <Typography>People Required: {selectedJob.peopleRequired}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogBox;
