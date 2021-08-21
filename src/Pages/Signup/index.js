import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import Logo from "../../Assets/logo1.png";
import AuthHeader from "../../Headers/AuthHeader/index";
import { ReactComponent as User } from "../../Assets/Icon awesome-user-alt.svg";
import { ReactComponent as Pass } from "../../Assets/Icon awesome-lock.svg";
import { ReactComponent as User1 } from "../../Assets/Icon awesome-user-alt-1.svg";
import { ReactComponent as Pass1 } from "../../Assets/Icon awesome-lock-1.svg";
// import { blue } from "@material-ui/core/colors";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  input: {
    borderBottom: "1px solid #452380",
  },
}));

const Signup = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AuthHeader />

      <div className="login-container">
        <div className="overlay"></div>
        <div className="background-pic"></div>
        <p className="form-heading"> WELCOME TO SSUET CHATBOT-ELEARNING </p>
        <div className="login-box">
          <p className="login-text">CREATE AN ACCOUNT</p>

          <form>
            <TextField
              fullWidth
              id="firstname"
              type="text"
              label="First Name"
              className="field"
              color="primary"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
            />

            <TextField
              fullWidth
              id="lastname"
              type="text"
              label="Last Name"
              className="field"
              color="primary"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
            />

            <TextField
              fullWidth
              id="email"
              type="email"
              label="Email"
              className="field"
              color="primary"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
            />

            <TextField
              fullWidth
              id="password"
              type="password"
              label="Password"
              className="field"
              color="#890008"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
            />

            <TextField
              fullWidth
              id="confirmpassword"
              type="password"
              label="Confirm Password"
              className="field"
              color="#890008"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
            />

            <TextField
              fullWidth
              id="contact"
              type="text"
              label="Phone Number"
              className="field"
              color="#890008"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
            />

            {/* <input type="text" placeholder="Email" className="field" /> <br />
            <input type="Password" placeholder="Password" className="field" /> */}
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
