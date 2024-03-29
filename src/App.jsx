import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Cart, Home, Login, Products, Signup, Wishlist } from "./pages";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // console.log("env from vite", import.meta.env.REACT_APP_JWT_SECRET);
  // console.log("env react app", process?.env?.REACT_APP_JWT_SECRET);

  const location = useLocation();

  // Check if the current route is either Login or Signup
  const isLoginPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
