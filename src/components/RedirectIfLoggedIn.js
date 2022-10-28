import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function RedirectIfLoggedIn() {
  const { user, isLoading } = useUser();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && user)  Navigate("/Dashboard");
    
  }, [isLoading, Navigate, user]);
}

export default RedirectIfLoggedIn;
