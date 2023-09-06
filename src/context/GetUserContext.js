import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getUserDetailsAPI } from '../features/user/getUserDetails';
import { getCookie } from "../utils/getCookie";

const getUserContext = createContext();

export function GetUserContextProvider({ children }) {
  // ? hooks
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [logInUserDetails, setLogInUserDetails] = useState({});

  const dispatch = useDispatch();
  const token = getCookie("access_token");

  useEffect(() => {
    checkUserisLoggedIn();
  }, [isUserLoggedIn]);

  const checkUserisLoggedIn = async () => {
    if (typeof token === "string" && token) {
      const data = await dispatch(getUserDetailsAPI());
      if (data?.payload?.data) {
        setLogInUserDetails(data?.payload?.data);
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    }
  };

  return (
    <getUserContext.Provider
      value={{
        token: token,
        isUserLoggedIn,
        setIsUserLoggedIn,
        setLogInUserDetails,
        logInUserDetails,
      }}
    >
      {children}
    </getUserContext.Provider>
  );
}

export function useGetUser() {
  return useContext(getUserContext);
}
