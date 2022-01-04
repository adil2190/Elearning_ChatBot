import React from "react";
import { Button } from "@material-ui/core";

function MyProfile(props) {
  const data = [
    { label: "Full Name", value: "Hammad Ahmed" },
    { label: "Roll No", value: "SE20-050" },
    { label: "Department", value: "Software Engineering" },
    { label: "Semester", value: "8th" },
    { label: "Phone No", value: "0322-2108410" },
  ];

  const renderItem = () => {
    return data.map((item) => (
      <p className="profile-text">
        <span style={{ fontWeight: "600" }}>{item.label}:</span> {item.value}
      </p>
    ));
  };
  return (
    <div>
      <h1 className="dashboard-heading">My Profile</h1>
      <div className="profile-container">
        {renderItem()}
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
        >
          Change Password
        </Button>
      </div>
    </div>
  );
}

export default MyProfile;
