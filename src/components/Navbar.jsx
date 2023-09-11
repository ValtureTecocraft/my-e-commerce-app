import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { MdShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sidebarStatus, toggleSidebar } from "../redux/features/sidebarSlice";

const Navbar = () => {
  const token = localStorage.getItem("access_token");
  // console.log(token);

  const [state, setState] = useState({
    toggle: false,
    search: "",
  });

  const dispatch = useDispatch();
  const isOpen = useSelector(sidebarStatus);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "auto"; // Revert back to auto overflow when sidebar is closed
  //   }

  //   // Cleanup effect to reset overflow on unmount or when isOpen changes
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [isOpen]);

  const handleSearchClick = () => {
    setState({
      ...state,
      toggle: !state.toggle,
      search: "",
    });
  };

  const handleSidebar = () => {
    dispatch(toggleSidebar(!isOpen));
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };

  return (
    <div className="fixed w-full flex bg-white justify-center shadow-lg items-center z-10">
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
            placeholder="Search..."
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
        <div className="hidden gap-8 text-2xl md:flex justify-center items-center">
          {!token ? (
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
          <AiFillHeart className="text-3xl" />
          <Link to={"/cart"}>
            <MdShoppingCart className="text-3xl" />
          </Link>
        </div>

        {/* responsive navbars */}
        <div onClick={handleSidebar} className="z-20 block md:hidden ">
          {isOpen ? <GrClose /> : <GiHamburgerMenu />}
        </div>

        <div
          className={`block md:hidden fixed top-[52px] duration-300 ${
            isOpen ? "right-0" : "right-[-700px]"
          } z-10 w-40 h-screen flex flex-col gap-5 bg-white p-5 shadow-lg`}
        >
          <p className="w-full flex gap-2 items-center">
            Wishlist{" "}
            <span className="text-xl">
              <AiFillHeart />
            </span>
          </p>

          <Link to={"/cart"}>
            <p className="w-full flex gap-2 items-center">
              Cart{" "}
              <span className="text-xl">
                <MdShoppingCart />
              </span>
            </p>
          </Link>

          {!token ? (
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
