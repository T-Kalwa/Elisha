import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Tag, Book, Users, Info, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Accueil', path: '/', icon: <Info size={18} /> },
    { title: 'À Propos', path: '/about', icon: <Users size={18} /> },
    { title: 'Études', path: '/etude', icon: <FileText size={18} /> },
    { title: 'Ressources', path: '/resources', icon: <Book size={18} /> },
  ];


  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5' 
        : 'py-6 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: -10, scale: 1.1 }}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center p-1.5 shadow-[0_0_20px_rgba(239,68,68,0.3)] transition-shadow group-hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]"
          >
            <Tag size={24} className="text-white" />
          </motion.div>
          <span className="text-xl font-bold font-serif tracking-tight text-white hidden md:block">
            Étiquette <span className="text-red-500 italic">&</span> Réalité
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center bg-white/5 border border-white/5 rounded-full px-2 py-1 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative px-4 py-2 text-sm font-medium transition-colors group"
            >
              <span className={`relative z-10 transition-colors ${
                location.pathname === link.path ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-100'
              }`}>
                {link.title}
              </span>
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-active"
                  className="absolute inset-0 bg-red-600/20 rounded-full border border-red-500/20"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">

          
          <button 
            className="lg:hidden p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 text-lg font-medium p-4 rounded-2xl transition-all ${
                    location.pathname === link.path 
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                      : 'text-zinc-400 hover:bg-white/5'
                  }`}
                >
                  <span className="p-2 rounded-lg bg-white/5">{link.icon}</span>
                  {link.title}
                </Link>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


