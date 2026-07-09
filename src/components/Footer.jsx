import { motion } from 'framer-motion';
import { Heart, ArrowUpCircle, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import socialData from '../link_media/link.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, href: socialData.github, label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, href: socialData.linkedin, label: 'LinkedIn' },
    { icon: <Instagram className="w-4 h-4" />, href: socialData.instagram, label: 'Instagram' },
    { icon: <Mail className="w-4 h-4" />, href: `mailto:${socialData.mail}`, label: 'Email' },
  ];

  return (
    <footer className="relative py-20 px-6 bg-transparent border-t border-black/5 dark:border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 relative z-10">
        <motion.div
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-2xl glass-strong border border-black/5 dark:border-white/10 flex items-center justify-center cursor-pointer hover:border-purple-500/50 transition-all text-slate-400 hover:text-purple-500 group shadow-lg"
        >
          <ArrowUpCircle className="w-7 h-7 transition-all" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-display font-bold tracking-tight text-purple-700 dark:text-purple-400">
              DARDCOR
            </span>
            <p className="text-[9px] text-slate-400 font-medium uppercase tracking-wider max-w-xs text-center md:text-left">
              Elevating Digital Experiences through innovative code and design.
            </p>
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            {['Home', 'About', 'Stack', 'Journey', 'Work', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase() === 'stack' ? 'skills' : item.toLowerCase() === 'journey' ? 'experience' : item.toLowerCase() === 'work' ? 'projects' : item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-[9px] font-bold text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors uppercase tracking-wider px-2.5 py-1"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -3 }}
                className="p-3 glass-strong rounded-xl border border-black/5 dark:border-white/10 text-slate-400 dark:text-slate-500 hover:text-purple-500 hover:border-purple-500/30 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full text-[9px] font-medium text-slate-400 uppercase tracking-wider gap-4">
          <p>&copy; {currentYear} Syahrul Ardi Prasetiyo. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 bg-black/5 dark:bg-white/5 px-4 py-2 rounded-full border border-black/5 dark:border-white/5">
            Crafted with <Heart className="w-2.5 h-2.5 text-red-500 fill-red-500" /> by{' '}
            <span className="text-slate-900 dark:text-white font-bold">Syahrul</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
