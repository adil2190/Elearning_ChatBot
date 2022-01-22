import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import Logo from "../Assets/logo1.png";
import AuthHeader from "../Headers/AuthHeader/index";
import { ReactComponent as User } from "../Assets/Icon awesome-user-alt.svg";
import { ReactComponent as Pass } from "../Assets/Icon awesome-lock.svg";
import { ReactComponent as User1 } from "../Assets/Icon awesome-user-alt-1.svg";
import { ReactComponent as Pass1 } from "../Assets/Icon awesome-lock-1.svg";
import { useState } from "react";
import {
  addSingleDoc,
  createUser,
  setSingleDocument,
} from "../Services/firestoreService";
import { collectionNames } from "../Constants/firebaseCollections";
// import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  input: {
    borderBottom: "1px solid #452380",
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const history = useHistory();
  const signUpReq = async (e) => {
    e.preventDefault();
    try {
      const user = await createUser(data.email, data.password);
      await setSingleDocument(collectionNames.students, user.user.uid, {
        ...data,
        password: "",
        userId: user.user.uid,
        isProfileComplete: false,
      });
      localStorage.setItem("userId", user.user.uid);
      history.push("/");
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AuthHeader />

      <div className="login-container">
        <div className="overlay"></div>
        <div className="background-pic"></div>
        <p className="form-heading"> WELCOME TO SSUET CHATBOT-ELEARNING </p>
        <div className="login-box">
          <p className="login-text">CREATE AN ACCOUNT</p>

          <form onSubmit={signUpReq}>
            <TextField
              fullWidth
              id="firstname"
              type="text"
              required
              label="First Name"
              className="field"
              color="primary"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
              value={data.firstName}
              onChange={(e) => setData({ ...data, firstName: e.target.value })}
            />

            <TextField
              fullWidth
              id="lastname"
              type="text"
              required
              label="Last Name"
              className="field"
              color="primary"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
              value={data.lastName}
              onChange={(e) => setData({ ...data, lastName: e.target.value })}
            />

            <TextField
              fullWidth
              id="email"
              type="email"
              label="Email"
              required
              className="field"
              color="primary"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />

            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              className="field"
              required
              color="#890008"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />

            <TextField
              fullWidth
              id="contact"
              type="number"
              label="Phone Number"
              className="field"
              color="#890008"
              required
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="login-submit"
              style={{ padding: 15, marginTop: 20 }}
            >
              Sign up
            </Button>

            <p className="form-text">OR</p>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="login-submit"
              style={{ padding: 15, marginTop: 20 }}
            >
              <FcGoogle style={{ marginRight: "20px" }} size="20px" />
              Sign up with Google
            </Button>

            <div className="flex" style={{ marginTop: "10px" }}>
              <p className="margin font">Already Registered?</p>
              <Link to="/" className="margin link">
                Login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
