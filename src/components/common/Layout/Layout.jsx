import Header from '@components/sections/Header';
import Footer from '@components/sections/Footer';
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react';

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout; 