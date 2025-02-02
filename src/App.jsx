import Layout from '@components/common/Layout/Layout';
import Home from '@components/sections/Home';
import About from '@components/sections/About';
import Skills from '@components/sections/Skills';
import Work from '@components/sections/Work';
import Contact from '@components/sections/Contact';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

function App() {
  useIntersectionObserver();

  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;
