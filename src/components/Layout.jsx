import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../selections/Navbar";
import Footer from "../selections/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Keep section scrolling when coming back from another route with a target
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
