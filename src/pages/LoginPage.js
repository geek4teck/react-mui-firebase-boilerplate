import React, { useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOpenIcon from "@mui/icons-material/LockOpen";
function LoginPage() {
  //Define Hooks
  const Navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState(null);

  //Define Handler Functions
  const formSubmitHandler = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      Navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  };

  //Styling
  const paperStyle = {
    padding: "20px",
    width: "50vh",
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#6262d1" };
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOpenIcon />
            </Avatar>
            <h4>Login</h4>
          </Grid>
          <Grid align="center">
            {error ? (
              <Typography variant="div" color="error">
                Error: {error}
              </Typography>
            ) : null}
            <TextField
              label="Email"
              placeholder="Enter Email"
              fullWidth
              style={{ margin: "8px 0" }}
              inputRef={emailRef}
            ></TextField>
            <TextField
              label="Password"
              placeholder="Enter Password"
              type="password"
              fullWidth
              style={{ margin: "8px 0" }}
              inputRef={passwordRef}
            ></TextField>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ margin: "8px 0" }}
              onClick={formSubmitHandler}
            >
              Login
            </Button>
            <br />
            <Link to="/signup">Register?</Link>
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default LoginPage;
