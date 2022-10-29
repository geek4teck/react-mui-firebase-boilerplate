import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function Authenticate() {
  const { user, isLoading } = useUser();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !user) Navigate("/");
  }, [isLoading, Navigate, user]);
}

export default Authenticate;
