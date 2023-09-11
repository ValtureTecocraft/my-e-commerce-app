import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  registrationUserData,
  setSignUpUserdata,
} from "../redux/features/signupSlice";
import { toast } from "react-toastify";
import { setUser } from "../redux/features/authSlice";
import { useDocumentTitle } from "../hooks";

const Signup = () => {
  // * variables
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useDocumentTitle("Signup");

  // ? states
  const [state, setState] = useState({
    errName: false,
    errEmail: false,
    errPassword: false,
    email: "",
    name: "",
    IName: false,
    IEmail: false,
    IPassword: false,
    password: "",
    loading: false,
  });

  // ! functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        email: state.email,
        password: state.password,
        name: state.name,
      };
      dispatch(setSignUpUserdata(userData));
      const res = await dispatch(registrationUserData(userData));
      // console.log(payload.payload.encodedToken);
      if (res.payload) {
        toast.success("User successfully registered.");
        dispatch(setUser(res.payload.foundUser));
        const token = res.payload.encodedToken;
        localStorage.setItem("access_token", token);
        navigate("/login");
      } else {
        toast.error("User already exixts.");
      }
    } catch (err) {
      console.log(err);
    }

    // console.log(state);
  };

  return (
    <>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-screen flex justify-center items-center overflow-hidden">
        <img
          className="min-w-[1180px] w-full h-full"
          src="https://images.unsplash.com/photo-1470596914251-afb0b4510279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2NlYW4sd2F0ZXIsbGlnaHR8fHx8fHwxNjkzMjIwNzEy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt="bg img Login"
        />
      </div>
      <div className="z-10 backdrop-blur w-full h-screen flex justify-center items-center">
        <Link
          to={"/"}
          className="fixed z-30 top-5 left-5 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent cursor-pointer text-3xl font-bold select-none"
        >
          Men's Shop
        </Link>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="w-80 h-fit shadow-xl bg-white/10 border border-white/10 rounded-lg px-6 py-5 gap-4 flex flex-col"
        >
          <h2 className="text-3xl text-center font-semibold">SignUp</h2>
          <div className="relative mt-4">
            <label
              className={`absolute duration-300 cursor-text ${
                state.IName
                  ? "-top-5 left-1 text-sm font-medium"
                  : "top-2 left-3"
              }`}
              htmlFor="name"
            >
              Name
            </label>
            <input
              className={`w-full h-10 px-2 border ${
                state.errName
                  ? "border-red-400 bg-red-500/20"
                  : "border-white/20 bg-white/20"
              } rounded-md outline-none`}
              onChange={(e) => setState({ ...state, name: e.target.value })}
              onFocus={() => setState({ ...state, IName: true })}
              // onBlur={() => setState({ ...state, IName: false })}
              type="text"
              id="name"
            />
            {/* <p className="error">{"errors.name?.message"}</p> */}
          </div>
          <div className="relative mt-2">
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
              className={`w-full h-10 px-2 border ${
                state.errEmail
                  ? "border-red-400 bg-red-500/20"
                  : "border-white/20 bg-white/20"
              } rounded-md outline-none`}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              onFocus={() => setState({ ...state, IEmail: true })}
              // onBlur={() => setState({ ...state, IEmail: false })}
              type="email"
              name="email"
              id="email"
            />
            {/* <p className="error">{"errors.email?.message"}</p> */}
          </div>
          <div className="relative mt-2">
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
              className={`w-full h-10 px-2 border ${
                state.errPassword
                  ? "border-red-400 bg-red-500/20"
                  : "border-white/20 bg-white/20"
              } rounded-md outline-none`}
              onChange={(e) => setState({ ...state, password: e.target.value })}
              onFocus={() => setState({ ...state, IPassword: true })}
              // onBlur={() => setState({ ...state, IPassword: false })}
              type="password"
              name="password"
              id="password"
            />
            {/* <p className="error">{"errors.email?.message"}</p> */}
          </div>

          <Button
            className="opacity-90"
            variant="contained"
            color="success"
            type="submit"
          >
            SignUp
          </Button>

          <p className="text-center text-sm">
            Already have account?{" "}
            <span className="font-medium duration-300 hover:text-blue-900">
              <Link to={"/login"}>Click Here</Link>
            </span>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
