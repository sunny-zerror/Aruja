import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import IntroLoader from "./common/IntroLoader";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div>
     <header><Header /></header>
      <main>{children}</main>
      {currentPath !== "/contact" && <footer><Footer /></footer>}
    </div>
  );
};

export default Layout;
