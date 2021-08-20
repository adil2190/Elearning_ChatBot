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
    borderBottom: "1px solid black",
  },
}));

const Login = (props) => {
  const classes = useStyles();

  return (
    <div>
      <AuthHeader />

      <div className="login-container">
        <div className="overlay"></div>
        <div className="background-pic"></div>
        <p className="form-heading"> WELCOME TO SSUET CHATBOT-ELEARNING </p>
        <div className="login-box">
          <p className="login-text">SIGN IN</p>

          <form>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={1}>
                <User />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  id="email"
                  type="email"
                  label="Email"
                  className="field"
                  color="primary"
                  inputProps={{ className: classes.input }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={1}>
                <Pass />
              </Grid>
              <Grid item xs={11}>
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
              </Grid>
            </Grid>

            {/* <input type="text" placeholder="Email" className="field" /> <br />
            <input type="Password" placeholder="Password" className="field" /> */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="login-submit"
              style={{ padding: 15, marginTop: 20 }}
            >
              Log in
            </Button>

            <p className="form-text">OR</p>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              className="login-submit"
              style={{ padding: 15, marginTop: 20 }}
            >
              Log in with Google
            </Button>

            <div className="flex" style={{ marginTop: "10px" }}>
              <div className="margin">
                <User1 />
              </div>
              <p className="margin font">Don't have an account?</p>
              <Link className="margin link">Sign Up</Link>
            </div>

            <div className="flex">
              <div className="margin">
                <Pass1 />
              </div>
              <p className="margin font">Forgot your password?</p>
              <Link className="margin link">Reset here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
