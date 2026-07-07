import { motion } from 'framer-motion';
import { Heart, ArrowUpCircle, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import socialData from '../link_media/link.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: socialData.github, color: 'hover:text-white' },
    { icon: <Linkedin className="w-5 h-5" />, href: socialData.linkedin, color: 'hover:text-purple-400' },
    { icon: <Instagram className="w-5 h-5" />, href: socialData.instagram, color: 'hover:text-pink-500' },
    { icon: <Mail className="w-5 h-5" />, href: `mailto:${socialData.mail}`, color: 'hover:text-purple-400' },
  ];

  return (
    <footer className="relative py-24 px-6 bg-transparent border-t border-black/5 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 60" className="w-full h-auto">
          <path
            d="M0,30 C360,60 720,0 1440,30 L1440,60 L0,60 Z"
            className="fill-black/5 dark:fill-white/5"
          />
        </svg>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16 relative z-10">
        <motion.div
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 rounded-3xl glass-strong border border-black/5 dark:border-white/10 flex items-center justify-center cursor-pointer hover:border-purple-500/50 transition-all text-slate-500 hover:text-purple-600 dark:hover:text-purple-400 group shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <ArrowUpCircle className="w-10 h-10 transition-all relative z-10" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-12 items-center text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <span className="text-3xl md:text-4xl font-black tracking-tighter uppercase whitespace-nowrap italic text-[#4a044e] dark:text-[#a855f7] drop-shadow-[0_0_8px_rgba(74,4,78,0.6)] dark:drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]">
              DARDCOR
            </span>
            <p className="text-slate-500 text-[10px] md:text-xs max-w-xs leading-relaxed font-bold uppercase tracking-[0.2em]">
              Elevating Digital{' '}
              <span className="text-slate-900 dark:text-white">Experiences</span> through
              innovative code and design.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-8 gap-y-4 text-[8px] md:text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em]">
            <a href="#home" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              HOME
            </a>
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              ABOUT
            </a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              SKILL
            </a>
            <a href="#experience" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              EXPERIENCE
            </a>
            <a href="#certificates" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              CERTIFICATE
            </a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              PROJECTS
            </a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              CONTACTS
            </a>
          </div>

          <div className="flex justify-center lg:justify-end gap-5">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5 }}
                className={`p-4 glass-strong rounded-2xl border border-black/5 dark:border-white/10 text-slate-500 dark:text-slate-400 transition-all ${social.color} hover:border-black/20 dark:hover:border-white/20`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent" />

        <div className="flex flex-col md:flex-row items-center justify-between w-full text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] gap-8 px-4">
          <p>&copy; {currentYear} Syahrul Ardi Prasetiyo. All Rights Reserved.</p>
          <div className="flex items-center gap-3 bg-black/5 dark:bg-white/5 px-6 py-2.5 rounded-full border border-black/5 dark:border-white/5">
            Crafted with{' '}
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" /> by{' '}
            <span className="text-slate-900 dark:text-white">Syahrul</span>
          </div>
          <div className="flex gap-6 uppercase tracking-[0.2em] text-[9px]">
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
