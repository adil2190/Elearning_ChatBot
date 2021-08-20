import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
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
      <div className="header">
        <h1 className="login-heading">Administration</h1>
        <div className="logo-circle"></div>
      </div>

      <div className="login-container">
        <div className="login-box">
          <p className="login-text">Login</p>

          <form>
            <TextField
              id="email"
              type="email"
              label="Email"
              className="field"
              color="primary"
              inputProps={{ className: classes.input }}
            />
            <TextField
              id="password"
              type="password"
              label="Password"
              className="field"
              color="#890008"
              style={{ marginTop: "0.9rem" }}
              inputProps={{ className: classes.input }}
            />

            {/* <input type="text" placeholder="Email" className="field" /> <br />
            <input type="Password" placeholder="Password" className="field" /> */}
            <p className="forgot">Forgot your password?</p>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="login-submit"
              style={{ padding: 15, marginTop: 20 }}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
