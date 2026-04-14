import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Study from './pages/Study';
import { Resources } from './pages/StaticPages';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="min-h-screen bg-[#08090a] text-white selection:bg-purple-500/30">
        <ScrollToTop />
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-purple-600 to-indigo-600 origin-left z-[9999]"
          style={{ scaleX }}
        />
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/etude" element={<Study />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
