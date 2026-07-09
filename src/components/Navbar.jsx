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
        if (el && el.offsetTop - 200 <= window.scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    if (document.documentElement.classList.contains('dark')) {
      setIsDarkMode(true);
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Journey', href: '#experience' },
    { name: 'Work', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 py-4 transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="mx-auto max-w-7xl">
        <div className={`relative flex items-center justify-between px-5 py-2.5 md:px-8 md:py-3 transition-all duration-500 rounded-full border ${
          scrolled
            ? 'glass-strong shadow-2xl shadow-purple-500/5 border-purple-500/10'
            : 'bg-transparent border-transparent'
        }`}>
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-9 h-9 md:w-10 md:h-10">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-70 transition duration-500" />
              <div className="relative w-full h-full bg-white dark:bg-dark-700 rounded-full flex items-center justify-center overflow-hidden border border-black/5 dark:border-white/10">
                <img src={myLogo} alt="DARDCOR" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
            <span className="text-lg md:text-xl font-display font-bold tracking-tight text-purple-700 dark:text-purple-400">
              DARDCOR
            </span>
          </motion.a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative px-4 py-2 text-xs font-medium tracking-wide transition-all rounded-full ${
                    isActive
                      ? 'text-white bg-purple-600 shadow-lg shadow-purple-500/25'
                      : 'text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-500/5'
                  }`}
                >
                  {link.name}
                </motion.a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:text-purple-500 transition-all"
              aria-label="Toggle Theme"
            >
              {!isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </motion.button>

            <button
              className="p-2.5 rounded-full bg-purple-600 text-white lg:hidden hover:bg-purple-700 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {scrolled && (
            <div className="absolute -bottom-px left-4 right-4 h-[1.5px] rounded-full overflow-hidden bg-transparent">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 rounded-full"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          )}
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
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[-1] lg:hidden"
            />
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-white dark:bg-dark-800 border-l border-purple-500/10 shadow-2xl z-[200] lg:hidden"
            >
              <div className="flex flex-col h-full p-8 pt-28">
                <div className="space-y-2">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        onClick={() => setIsOpen(false)}
                        className={`block p-4 rounded-2xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-purple-600/10 border border-purple-500/20 text-purple-600 dark:text-purple-400'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-purple-500/5 hover:text-purple-600 dark:hover:text-purple-400'
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}
                </div>

                <div className="mt-auto pt-10 border-t border-purple-500/10">
                  <p className="text-[10px] font-medium text-slate-400 text-center tracking-wider">
                    &copy; 2026 DARDCOR
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
