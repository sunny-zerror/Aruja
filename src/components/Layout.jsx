import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { useRouter } from "next/router";
import PageTransition from "./common/PageTransition";
import useNavigation from "../store/useNavigation";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const { revealerRef } = useNavigation();

  return (
    <>
      <PageTransition ref={revealerRef} />

      <header>
        <Header />
      </header>

      <main>{children}</main>

      {!["/contact", "/work", "/studio", "/demo", "/work/[id]"].includes(currentPath) && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
};

export default Layout;
