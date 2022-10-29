import React, { useRef, useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import KeyIcon from "@mui/icons-material/Key";
import RedirectIfLoggedIn from "./../../components/RedirectIfLoggedIn";
function ForgotPasswordPage() {
  //Define Hooks
  const Navigate = useNavigate();
  const emailRef = useRef();
  const [error, setError] = useState(null);

  //Define Handler Functions
  const formSubmitHandler = async () => {
    const email = emailRef.current.value;
    try {
      await sendPasswordResetEmail(getAuth(), email);
      Navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

  //Styling
  const paperStyle = {
    padding: "40px",
    width: "50vh",
    margin: "20px auto",
    maxWidth: 350,
  };

  const avatarStyle = { backgroundColor: "#6262d1" };
  return (
    <div>
      <RedirectIfLoggedIn />
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <KeyIcon />
            </Avatar>
            <h4>Forgot Password</h4>
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

            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={{ margin: "8px 0" }}
              onClick={formSubmitHandler}
            >
              Send Email
            </Button>
            <br />
          </Grid>
        </Paper>
      </Grid>
    </div>
  );
}

export default ForgotPasswordPage;
