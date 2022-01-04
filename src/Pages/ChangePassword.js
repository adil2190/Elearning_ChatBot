import React from "react";
import { TextField, Button } from "@material-ui/core";

function ChangePassword(props) {
  return (
    <div>
      <h1 className="dashboard-heading">Change Password</h1>
      <div
        style={{
          marginLeft: "20px",
          minWidth: "300px",
          maxWidth: "400px",
          position: "relative",
        }}
      >
        <TextField fullWidth label="Current Password" variant="outlined" />
        <div style={{ height: "20px" }}></div>
        <TextField fullWidth label="New Password" variant="outlined" />
        <div style={{ height: "20px" }}></div>
        <Button
          style={{ position: "absolute", right: 0 }}
          variant="contained"
          color="primary"
        >
          Done
        </Button>
      </div>
    </div>
  );
}

export default ChangePassword;
