import React from "react";
import { Button, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { getSingleDoc } from "../Services/firestoreService";
import { collectionNames } from "../Constants/firebaseCollections";
import { useState } from "react";
import { useEffect } from "react";

function MyProfile(props) {
  const history = useHistory();
  const [selfData, setSelfData] = useState({});
  const [loader, setLoader] = useState(true);
  const getData = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const user = await getSingleDoc(collectionNames.students, userId);
      setSelfData(user);
      console.log(user);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const data = [
    { label: "Full Name", value: `${selfData.firstName} ${selfData.lastName}` },
    { label: "Roll No", value: selfData.rollNumber },
    { label: "Department", value: selfData.technology },
    { label: "Semester", value: selfData.semester },
    { label: "Phone No", value: selfData.phone },
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
      {loader ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "200px",
          }}
        >
          <CircularProgress size={30} />
        </div>
      ) : (
        <div className="profile-container">
          {renderItem()}
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={() => history.push("/dashboard/changepassword")}
          >
            Change Password
          </Button>
        </div>
      )}
    </div>
  );
}

export default MyProfile;
