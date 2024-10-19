import { UserContext } from "@/_components/UserProvider";
import { useContext, useEffect, useState } from "react";
import { getProfile } from "./utils";

export const useUser = () => {
  const { token } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    if (token) {
      getProfile(token).then((res) => {
        if (res.success) {
          setUser(res.user);
          setIsAuthenticated(true);
        }
        setLoading(false);
      });
    }
  }, []);

  return { user, isLoading, isAuthenticated };
};
