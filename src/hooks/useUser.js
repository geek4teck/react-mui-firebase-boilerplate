import { useState, useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const useUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return unsubsubscribe;
  }, []);
  return { user, isLoading };
};

export default useUser;
