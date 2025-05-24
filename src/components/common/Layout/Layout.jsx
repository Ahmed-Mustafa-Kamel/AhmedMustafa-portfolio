import Header from "@components/sections/Header";
import Footer from "@components/sections/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/30 rounded-full blur-[128px] animate-pulse-light" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/40 rounded-full blur-[128px] animate-pulse-light-delayed" />
      </div>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
