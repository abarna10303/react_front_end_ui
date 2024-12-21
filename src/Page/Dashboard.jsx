import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Typography,
  Card,
  Avatar,
  Button,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
} from "@mui/material";
import { commonStyles } from "./CommonStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  getActiveJobs,
  getAvailableContractors,
  getAvailableWorkers,
  postNewJob,
  updateTheJobStatus,
} from "../store/thunck";
import { useNavigate } from "react-router-dom";
import {
  selectActiveUserJobs,
  selectAvailableContractors,
  selectAvailableWorkers,
  selectSuccessMessage,
} from "../store/selector";
import DialogBox from "./DialogBox";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F4F8F5",
    height: "100vh",
  },
  sidebar: {
    width: "20%",
    backgroundColor: "#DFF4E3",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    width: "60%",
    padding: "20px",
    overflowY: "auto",
  },
  rightPanel: {
    width: "20%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#DFF4E3",
    textAlign: "center",
  },
  logo: {
    marginBottom: "20px",
  },
  navItem: {
    margin: "15px 0",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
  },
  sectionTitle: {
    marginBottom: "10px !important",
    fontWeight: "bold !important",
    textAlign: "center !important",
    fontFamily: "Arial, sans-serif !important",
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    marginBottom: "20px",
  },
  listItem: {
    marginBottom: "10px",
    borderRadius: "10px",
    backgroundColor: "#FFF",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  textFieldStyle: {
    marginBottom: "15px !important",
  },
  textFieldContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "50px",
    marginBottom: "20px",
    "& .MuiInputBase-root": {
      width: "calc(510px - 50px)",
    },
  },
  registerBtnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    "& .MuiButton-root": {
      width: "500px",
      backgroundColor: "#ec7063 !important",
    },
  },
  viewDetailsButton: {
    padding: "8px 16px !important",
    textTransform: "none !important",
    backgroundColor: "#ec7063 !important",
  },
});

const Dashboard = () => {
  const classes = useStyles();
  const commonClasses = commonStyles();
  const userData = JSON.parse(localStorage.getItem("otpSuccessData"));
  const successMessage = useSelector(selectSuccessMessage);
  const activeJobs = useSelector(selectActiveUserJobs);
  const availableWorkers = useSelector(selectAvailableWorkers);
  const availableContractors = useSelector(selectAvailableContractors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialState = {
    jobTitle: "",
    jobDescription: "",
    amount: "",
    location: "",
    pincode: "",
    peopleRequired: "",
  };
  const [state, setState] = React.useState(initialState);
  const [open, setOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleCreateJob = () => {
    const jobData = {
      createdBy: userData.fullName,
      createdByMobile: userData.mobileNo,
      status: "Active",
      ...state,
    };
    dispatch(postNewJob(jobData));
    setState(initialState);
  };

  const handleLogout = () => {
    localStorage.removeItem("otpSuccessData");
    navigate("/login");
  };

  const handleViewDetails = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddJob = (job) => {
    dispatch(updateTheJobStatus(job._id, "Finished"));
  };

  useEffect(() => {
    dispatch(
      getActiveJobs(
        userData.fullName,
        userData.mobileNo,
        userData.type,
        userData.pincode
      )
    )
      .then(() => {
        return dispatch(getAvailableWorkers(userData.pincode, "worker"));
      })
      .then(() => {
        return dispatch(getAvailableContractors(userData.pincode));
      })
      .catch((error) => {
        console.error("Error during API calls:", error);
      });
  }, [successMessage]);

  return (
    <div className={classes.container}>
      {/* Sidebar */}
      <div className={classes.sidebar}>
        <Typography variant="h6" className={classes.sectionTitle}>
          Available Initiators
        </Typography>
        <List>
          {availableContractors.map((worker, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>{worker.fullName.charAt(0).toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={worker.fullName}
                secondary="Managed by Manager B"
              />
            </ListItem>
          ))}
        </List>
        <Box
          className={`${commonClasses.formButton} ${classes.registerBtnContainer}`}
        >
          <Button onClick={handleLogout}>Logout</Button>
        </Box>
      </div>

      <div className={classes.content}>
        {userData.type === "jobOwner" && (
          <>
            <Typography variant="h6" className={classes.sectionTitle}>
              Post a New Job
            </Typography>
            <Card className={classes.card}>
              <TextField
                fullWidth
                variant="outlined"
                name="jobTitle"
                value={state["jobTitle"]}
                onChange={handleInputChange}
                className={classes.textFieldStyle}
                placeholder="Enter Job Title"
              />
              <TextField
                fullWidth
                variant="outlined"
                name="jobDescription"
                value={state["jobDescription"]}
                onChange={handleInputChange}
                multiline
                rows={3}
                className={classes.textFieldStyle}
                placeholder="Enter Job Description"
              />
              <Box className={classes.textFieldContainer}>
                <TextField
                  variant="outlined"
                  name="amount"
                  value={state["amount"]}
                  onChange={handleInputChange}
                  placeholder="Enter Amount"
                />
                <TextField
                  variant="outlined"
                  name="peopleRequired"
                  value={state["peopleRequired"]}
                  type="number"
                  onChange={handleInputChange}
                  placeholder="Enter Number of People Required"
                />
              </Box>
              <Box className={classes.textFieldContainer}>
                <TextField
                  variant="outlined"
                  name="pincode"
                  value={state["pincode"]}
                  onChange={handleInputChange}
                  placeholder="Enter Pincode"
                />
                <TextField
                  variant="outlined"
                  name="location"
                  value={state["location"]}
                  onChange={handleInputChange}
                  placeholder="Enter Location"
                />
              </Box>

              <Box
                className={`${commonClasses.formButton} ${classes.registerBtnContainer}`}
              >
                <Button onClick={handleCreateJob}>Create Job</Button>
              </Box>
            </Card>
          </>
        )}
        <Typography variant="h6" className={classes.sectionTitle}>
          Active Job Postings
        </Typography>
        <Card className={classes.card}>
          <List>
            {activeJobs.map((job, index) => (
              <ListItem key={index} className={classes.listItem}>
                <ListItemText
                  primary={job.jobTitle}
                  secondary={job.jobDescription}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.viewDetailsButton}
                  onClick={
                    userData.type === "jobOwner"
                      ? () => handleViewDetails(job)
                      : () => handleAddJob(job)
                  }
                >
                  {userData.type === "jobOwner"
                    ? " View Details"
                    : "Request Job"}
                </Button>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>

      <div className={classes.rightPanel}>
        <Avatar
          style={{
            margin: "0 auto",
            marginBottom: "10px",
            width: 60,
            height: 60,
          }}
        >
          {userData.fullName[0]}
        </Avatar>
        <Typography variant="h6">{userData.fullName}</Typography>
        <Typography variant="body2" style={{ marginBottom: "20px" }}>
          Role: {userData.type}
        </Typography>
        <Typography variant="h6" className={classes.sectionTitle}>
          Available Workers
        </Typography>
        <List>
          {availableWorkers.map((worker, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>{worker.fullName.charAt(0).toUpperCase()}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={worker.fullName}
                secondary="Managed by Manager B"
              />
            </ListItem>
          ))}
        </List>
      </div>
      {open && (
        <DialogBox
          open={open}
          handleClose={handleClose}
          selectedJob={selectedJob}
        />
      )}
    </div>
  );
};

export default Dashboard;
