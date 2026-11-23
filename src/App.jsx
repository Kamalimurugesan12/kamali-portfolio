import { useState } from 'react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import useScrollVars from './hooks/useScrollVars';

export default function App() {
  const [ready, setReady] = useState(false);
  useScrollVars();

  return (
    <>
      <Loader onDone={() => setReady(true)} />
      <div className="page-bg" aria-hidden="true">
        <span className="page-bg__glow page-bg__glow--a" />
        <span className="page-bg__glow page-bg__glow--b" />
        <span className="page-bg__grid" />
      </div>
      <Cursor />
      <Navbar />
      <main id="skip" className={ready ? 'is-ready' : ''} tabIndex={-1}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
