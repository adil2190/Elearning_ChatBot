import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import Logo from "../Assets/logo1.png";
import AuthHeader from "../Headers/AuthHeader/index";

// import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  input: {
    borderBottom: "1px solid #452380",
  },
}));

const PasswordReset = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AuthHeader />

      <div className="login-container">
        <div className="overlay"></div>
        <div className="background-pic"></div>
        <p className="form-heading"> WELCOME TO SSUET CHATBOT-ELEARNING </p>
        <div className="login-box">
          <p className="login-text">TROUBLE LOGGING IN?</p>

          <div className="flex-center">
            <p style={{ color: "#666" }}>
              Enter your email we'll send you a link to get back into your
              account
            </p>
          </div>
          <form>
            <TextField
              fullWidth
              id="email"
              type="email"
              label="Enter Your Email"
              className="field"
              color="primary"
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
              Send Login Link
            </Button>

            <p className="form-text">OR</p>

            <div className="flex-center" style={{ marginTop: "8px" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
                to="/signup"
              >
                Create New Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
