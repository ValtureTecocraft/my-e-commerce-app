import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState({
    toggle: false,
    search: "",
  });

  const navigate = useNavigate();

  const handleSearchClick = () => {
    setState({
      ...state,
      toggle: !state.toggle,
      search: "",
    });
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="fixed w-full flex bg-white justify-center shadow-lg items-center">
      <div className="relative max-w-7xl w-full py-3 px-5 flex justify-between items-center">
        <div
          className={`w-fit transition-transform duration-300 flex justify-center items-center border-2 rounded ${
            state.toggle ? "border-gray-600" : "border-transparent"
          }`}
        >
          <input
            className={`duration-300 transition-[width] outline-none ${
              state.toggle ? "w-40 px-2" : "w-0"
            }`}
            placeholder="Search ..."
            type="text"
            name="search"
            value={state.search}
            onChange={(e) => setState({ ...state, search: e.target.value })}
          />
          <button onClick={handleSearchClick} type="button">
            {state.toggle ? (
              <AiOutlineClose
                // onClick={() => setState({ ...state, search: "" })}
                className="text-xl text-gray-700"
              />
            ) : (
              <BiSearchAlt className="text-2xl duration-300 ease-in-out text-gray-500 hover:text-black hover:scale-110" />
            )}
          </button>
        </div>

        <Link
          to={"/"}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer text-3xl font-bold select-none"
        >
          Men's Shop
        </Link>

        <div className="gap-8 text-2xl flex justify-center items-center">
          {true ? (
            <Link
              to={"/login"}
              className=" w-24 h-10 duration-300 text-lg text-gray-800 ease-in transition-all flex justify-center items-center pb-1 rounded border-2 border-gray-800 h hover:text-gray-200 hover:rounded-full hover:bg-gray-500"
            >
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className=" w-24 ripple h-10 duration-300 text-lg text-red-800 ease-in transition-all flex justify-center items-center pb-1 rounded border-2 border-red-800 h hover:text-red-100 hover:rounded-full hover:bg-red-500"
              type="button"
            >
              Logout
            </button>
          )}
          <AiFillHeart />
          <Link to={"/products"}>
            <MdShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
