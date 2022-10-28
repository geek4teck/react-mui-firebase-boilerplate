import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import useUser from "./../hooks/useUser";

function Header(props) {
  //Define Hooks
  const { user, isLoading } = useUser();
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  if (loading) return null;
  console.log(user);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LogoDevIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My App
            </Typography>
            {!user ? null : (
              <Typography style={{ marginRight: "50px" }}>
                Hello {user.email}
              </Typography>
            )}
            {user ? null : (
              <Button
                color="inherit"
                onClick={() => {
                  Navigate("/signup");
                }}
              >
                Register
              </Button>
            )}

            {user ? null : (
              <Button
                color="inherit"
                onClick={() => {
                  Navigate("/");
                }}
              >
                Login
              </Button>
            )}
            {!user ? null : (
              <Button
                color="inherit"
                onClick={() => {
                  signOut(getAuth())
                    .then(() => {
                      // Sign-out successful.
                      Navigate("/");
                    })
                    .catch((error) => {
                      // An error happened.
                      console.error(error);
                    });
                }}
              >
                Logout
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
