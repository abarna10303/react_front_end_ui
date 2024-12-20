import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Typography,
  Card,
  Avatar,
  Button,
  TextField,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F4F8F5",
    height: "100vh",
  },
  sidebar: {
    width: "20%",
    backgroundColor: "#204E39",
    color: "#fff",
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
    marginBottom: "20px",
    fontWeight: "bold",
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
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* Sidebar */}
      <div className={classes.sidebar}>
        <Typography variant="h5" className={classes.logo}>
          Labour Work App
        </Typography>
        <div>
          <Typography className={classes.navItem}>Dashboard</Typography>
          <Typography className={classes.navItem}>Post Job</Typography>
          <Typography className={classes.navItem}>Workers</Typography>
          <Typography className={classes.navItem}>Analytics</Typography>
        </div>
        <Button variant="contained" color="secondary">
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className={classes.content}>
        {/* Job Post Section */}
        <Typography variant="h6" className={classes.sectionTitle}>
          Post a New Job
        </Typography>
        <Card className={classes.card}>
          <TextField
            fullWidth
            label="Job Title"
            variant="outlined"
            style={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            multiline
            rows={3}
            style={{ marginBottom: "15px" }}
          />
          <Button variant="contained" color="primary">
            Post Job
          </Button>
        </Card>

        {/* Active Jobs Section */}
        <Typography variant="h6" className={classes.sectionTitle}>
          Active Job Postings
        </Typography>
        <Card className={classes.card}>
          <List>
            {[
              "Electrician Needed",
              "Plumber Required",
              "Construction Work",
            ].map((job, index) => (
              <ListItem key={index} className={classes.listItem}>
                <ListItemText primary={job} secondary="Posted by Manager A" />
                <Button variant="contained" color="primary" size="small">
                  View Details
                </Button>
              </ListItem>
            ))}
          </List>
        </Card>
      </div>

      {/* Right Panel */}
      <div className={classes.rightPanel}>
        {/* User Profile */}
        <Avatar
          style={{
            margin: "0 auto",
            marginBottom: "10px",
            width: 60,
            height: 60,
          }}
        >
          U
        </Avatar>
        <Typography variant="h6">John Doe</Typography>
        <Typography variant="body2" style={{ marginBottom: "20px" }}>
          Role: Job Provider
        </Typography>

        {/* Worker List */}
        <Typography variant="h6" className={classes.sectionTitle}>
          Available Workers
        </Typography>
        <List>
          {[
            "Worker A (Electrician)",
            "Worker B (Plumber)",
            "Worker C (Mason)",
          ].map((worker, index) => (
            <ListItem key={index} className={classes.listItem}>
              <ListItemAvatar>
                <Avatar>{worker[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={worker} secondary="Managed by Manager B" />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Dashboard;
