import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/features/loginSlice";
import { toast } from "react-toastify";
import { setUser } from "../redux/features/authSlice";

const Login = () => {
  // * variables
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tokenExpirationInSeconds = 3600;

  // const currentUser = useSelector(selectUser);
  // console.log(currentUser);

  // ? states
  const [state, setState] = useState({
    IEmail: false,
    IPassword: false,
    email: "",
    password: "",
  });
  const [_, setCookies] = useCookies(["access_token"]);

  // ! functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      email: state.email,
      password: state.password,
    };
    const { payload } = await dispatch(loginUser({ ...values }));
    console.log(payload);

    if (payload === undefined) {
      toast.error("Invalid login credentials");
    } else {
      const expirationDate = new Date(
        Date.now() + tokenExpirationInSeconds * 1000 // Convert seconds to milliseconds
      );
      setCookies("access_token", payload.encodedToken, {
        path: "/",
        httpOnly: false,
        expires: expirationDate,
        secure: true,
        sameSite: "strict",
      });
      dispatch(setUser(payload.foundUser));
      navigate("/");
    }
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      IEmail: prevState.email !== "",
      IPassword: prevState.password !== "",
    }));
  }, [state.email, state.password]);

  return (
    <>
      <div className="fixed z-0 top-1/2 left-1/2 bg-[#676675] -translate-x-1/2 -translate-y-1/2 w-full h-screen overflow-hidden flex justify-center items-center">
        <img
          className="min-w-[1120px] w-screen h-screen"
          src="https://images.unsplash.com/photo-1495546992359-94a48035efca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2NlYW4sd2F0ZXIsbGlnaHR8fHx8fHwxNjkzMjIwODky&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt="bg img Login"
        />
      </div>
      <div className="z-10 backdrop-blur w-full h-screen flex justify-center items-center">
        <Link
          to={"/"}
          className="fixed z-30 top-5 left-5 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent cursor-pointer text-3xl font-bold select-none"
        >
          Men's Shop
        </Link>
        <form
          onSubmit={handleSubmit}
          className="w-80 h-fit shadow-xl bg-white/10 border border-white/10 rounded-lg px-6 py-5 gap-4 flex flex-col"
        >
          <div></div>
          <h2 className="text-3xl text-center font-semibold">Login</h2>
          <div className="relative mt-4">
            <label
              className={`absolute duration-300 cursor-text ${
                state.IEmail
                  ? "-top-5 left-1 text-sm font-medium"
                  : "top-2 left-3"
              }`}
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full h-10 px-2 bg-white/20 border border-white/20 rounded-md outline-none"
              // onFocus={() => setState({ ...state, IEmail: true })}
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              value={state.email}
              onChange={handleChange}
            />
            <div className="h-5">
              {/* <p className="errorMsg pl-1">{"errors.email"}</p> */}
            </div>
          </div>
          <div className="relative">
            <label
              className={`absolute duration-300 cursor-text ${
                state.IPassword
                  ? "-top-5 left-1 text-sm font-medium"
                  : "top-2 left-3"
              }`}
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full h-10 px-2 bg-white/20 border border-white/20 rounded-md outline-none"
              // onFocus={() => setState({ ...state, IPassword: true })}
              type="password"
              id="password"
              name="password"
              autoComplete="off"
              value={state.password}
              onChange={handleChange}
            />
            <div className="h-5">
              {/* <p className="errorMsg pl-1">{"errors.password"}</p> */}
            </div>
          </div>

          <button
            className="w-full h-10 mt-3 duration-300 bg-white/80 hover:bg-white/90 font-semibold rounded-md"
            type="submit"
          >
            Login
          </button>

          <p className="text-center text-sm">
            Don't have account?{" "}
            <span className="font-medium duration-300 hover:text-blue-900">
              <Link to={"/signup"}>Click Here</Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
