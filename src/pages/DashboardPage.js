import { Typography } from "@mui/material";
import React from "react";
import Authenticate from "../components/Authenticate";

function DashboardPage() {
  return (
    <>
      <Authenticate />
      <Typography>Hello World</Typography>
    </>
  );
}

export default DashboardPage;
