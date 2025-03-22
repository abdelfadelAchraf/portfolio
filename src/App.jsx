import React, { useEffect } from 'react';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';

const App = () => {
  // Using useEffect for lazy loading images
  useEffect(() => {
    const imgs = document.querySelectorAll("img");
    imgs.forEach((image) => {
      image.setAttribute('loading', 'lazy');
    });
  }, []);

  return (
    <main className="overflow-x-hidden z-50 relative bg-black tracking-tighter antialiased h-screen transition-colors duration-300 text-white">
      <SplashCursor />
      <div className="absolute w-full h-[100vh] z-20">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
