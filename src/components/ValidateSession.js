import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

function ValidateSession(props) {
  const { user, isLoading } = useUser();
  const Navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !user) Navigate("/");
  }, [isLoading]);
}

export default ValidateSession;
