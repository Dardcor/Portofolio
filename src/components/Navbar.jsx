import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import myLogo from '../images/random/circular_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop - 150 <= window.scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILL', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CERTIFICATE', href: '#certificates' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'CONTACTS', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 md:px-8 py-4 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl transition-all duration-500 px-2 md:px-0">
        <div
          className={`relative px-6 py-3 md:px-10 md:py-4 transition-all duration-500 rounded-[2.5rem] border border-white/20 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] ${
            scrolled
              ? 'glass-strong backdrop-blur-2xl'
              : 'bg-white/10 dark:bg-[#0f0117]/10 backdrop-blur-md'
          }`}
        >
          <div className="flex justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
                <div className="relative w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-[#1e0533] rounded-full flex items-center justify-center border border-black/5 dark:border-white/10 overflow-hidden">
                  <img
                    src={myLogo}
                    alt="DARDCOR Logo"
                    className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500"
                  />
                </div>
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tighter text-[#4a044e] dark:text-[#a855f7] italic drop-shadow-[0_0_8px_rgba(74,4,78,0.8)] dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                DARDCOR
              </span>
            </motion.div>

            <div className="hidden lg:flex items-center gap-2">
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.slice(1);
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`relative px-4 py-2 text-[10px] font-black tracking-[0.2em] transition-all uppercase rounded-xl ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/30'
                          : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-500/10'
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>

              <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 mx-4" />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-3 bg-white dark:bg-[#1e0533] shadow-lg rounded-2xl border border-black/5 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-purple-500 transition-all"
                aria-label="Toggle Theme"
              >
                {!isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.button>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
              <button
                onClick={toggleTheme}
                className="p-2.5 glass rounded-xl border border-black/5 dark:border-white/10 text-slate-900 dark:text-white shadow-md"
              >
                {!isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              <button
                className="relative p-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl shadow-lg shadow-purple-500/30 overflow-hidden group"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {isOpen ? (
                  <X className="w-6 h-6 relative z-10" />
                ) : (
                  <Menu className="w-6 h-6 relative z-10" />
                )}
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full overflow-hidden bg-transparent">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm glass-strong border-l border-white/10 shadow-2xl z-[200] lg:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                <div className="space-y-3">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => setIsOpen(false)}
                        className={`block p-4 rounded-2xl text-sm font-black uppercase tracking-[0.3em] transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/30 text-purple-600 dark:text-purple-400'
                            : 'bg-white/5 border border-white/5 text-slate-700 dark:text-slate-300 hover:bg-purple-500/10 hover:border-purple-500/20 hover:text-purple-600 dark:hover:text-purple-400'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-auto pt-10 border-t border-white/10 text-center">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    &copy; 2026 DARDCOR DIGITAL
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
