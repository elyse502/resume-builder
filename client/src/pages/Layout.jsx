import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Login from "./Login";
import { useEffect } from "react";
import { login, setLoading } from "../app/features/authSlice";

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (token && user) {
      dispatch(login({ token, user: JSON.parse(user) }));
    }

    dispatch(setLoading(false));
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {user ? (
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Outlet />
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Layout;
