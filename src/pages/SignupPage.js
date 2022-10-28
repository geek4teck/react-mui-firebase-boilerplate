import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function SignupPage(props) {
  //Define Styles
  const paperStyle = {
    width: "50vh",
    height: 400,
    margin: "20px auto",
    padding: "20px",
  };

  //Define hooks
  const { user, isLoading } = useUser();
  const Navigate = useNavigate();
  const [error, setError] = useState(null);
  const emailRef = useRef();
  const passwordRef = useRef();
  const retypePasswordRef = useRef();

  //useEffect
  useEffect(() => {
    if (!isLoading && user !== null) Navigate("/dashboard");
  }, [isLoading]);

  //Define Action handlers
  const submitHandler = async () => {
    //Data Collection
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const retypePassword = retypePasswordRef.current.value;
    //Validation
    setError(null);
    if (password !== retypePassword) {
      setError("Password and Retype Password do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(getAuth(), email, password);
      Navigate("/dashboard");
    } catch (e) {
      setError(e.message);
    }
  };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ backgroundColor: "#6262d1" }}>
            <HowToRegOutlinedIcon />
          </Avatar>
          <h4>Register</h4>
        </Grid>
        <Grid align="center">
          {error ? <Typography color="error">{error}</Typography> : null}
          <TextField
            placeholder="Enter Email"
            label="Email"
            fullWidth
            style={{ margin: "8px 0" }}
            inputRef={emailRef}
            type="email"
          />
          <TextField
            placeholder="Enter Password"
            label="Password"
            type="password"
            fullWidth
            style={{ margin: "8px 0" }}
            inputRef={passwordRef}
          />
          <TextField
            placeholder="Re-type Password"
            label="Retype Password"
            type="password"
            fullWidth
            style={{ margin: "8px 0" }}
            inputRef={retypePasswordRef}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={{ margin: "8px 0" }}
            onClick={submitHandler}
          >
            Register
          </Button>
          <br />
          <Link to="/">Login?</Link>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default SignupPage;
