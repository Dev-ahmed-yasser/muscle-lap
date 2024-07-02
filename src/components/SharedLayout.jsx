import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Transition from "./Transition";
import Footer from "./Footer";
import { useEffect } from "react";

export default function SharedLayout() {
  useEffect(() => {
    const footerHeight = 160;
    const minHeight =
      window.outerHeight -
      (window.outerHeight - window.innerHeight + footerHeight);
    document.documentElement.style.setProperty(
      "--min-height",
      minHeight + "px",
    );
  }, []);
  return (
    <main>
      <Transition />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
