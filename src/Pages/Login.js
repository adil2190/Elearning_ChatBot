import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Logo from "../Assets/logo1.png";
import AuthHeader from "../Headers/AuthHeader/index";
import { ReactComponent as User } from "../Assets/Icon awesome-user-alt.svg";
import { ReactComponent as Pass } from "../Assets/Icon awesome-lock.svg";
import { ReactComponent as User1 } from "../Assets/Icon awesome-user-alt-1.svg";
import { ReactComponent as Pass1 } from "../Assets/Icon awesome-lock-1.svg";
// import { blue } from "@material-ui/core/colors";

import { signInUser } from "../Services/firestoreService";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  input: {
    borderBottom: "1px solid #452380",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        history.push("/dashboard");
        setLoader(false);
      }
    });
  }, []);

  const loginRequest = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const user = await signInUser(data.email, data.password);
      localStorage.setItem("userId", user.user.uid);
      // console.log(user);
      setError("");
      window.location.href = `${window.location.origin}/dashboard/default`;
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoader(false);
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
          <p className="login-text">SIGN IN</p>

          <form onSubmit={loginRequest}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item xs={1}>
                <User />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  fullWidth
                  id="email"
                  type="email"
                  required
                  label="Email"
                  className="field"
                  color="primary"
                  inputProps={{ className: classes.input }}
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
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
                  required
                  className="field"
                  color="#890008"
                  style={{ marginTop: "0.9rem" }}
                  inputProps={{ className: classes.input }}
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </Grid>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </Grid>

            {/* <input type="text" placeholder="Email" className="field" /> <br />
            <input type="Password" placeholder="Password" className="field" /> */}

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="login-submit"
              disabled={loader}
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
              <FcGoogle style={{ marginRight: "20px" }} size="20px" />
              Log in with Google
            </Button>

            <div className="flex" style={{ marginTop: "10px" }}>
              <div className="margin">
                <User1 />
              </div>
              <p className="margin font">Don't have an account?</p>
              <Link to="/signup" className="margin link">
                Sign Up
              </Link>
            </div>

            <div className="flex">
              <div className="margin">
                <Pass1 />
              </div>
              <p className="margin font">Forgot your password?</p>
              <Link className="margin link" to="/passwordreset/">
                Reset here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
