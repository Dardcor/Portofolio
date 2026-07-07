import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';
import profile from '../images/random/profile.png';
import socialLinks from '../link_media/link.json';
import ThreeScene from './ThreeScene.jsx';

const cvFile = '/CV_Syahrul Ardi Prasetiyo.pdf';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent transition-colors duration-300">
      <ThreeScene />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#0f0117] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 pointer-events-none z-[1]" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12 lg:gap-20 px-6 py-32">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8 space-y-4"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Hi, I'm{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 animate-gradient-shift"
                style={{ backgroundSize: '300% 300%' }}
              >
                Syahrul Ardi
              </span>{" "}
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-500 animate-gradient-shift"
                style={{ backgroundSize: '300% 300%', animationDelay: '0.5s' }}
              >
                Prasetiyo
              </span>
            </h1>

            <div className="text-lg md:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300">
              <TypeAnimation
                sequence={[
                  'I build Modern Websites', 2000,
                  "I'm a Full Stack Developer", 2000,
                  'I craft Digital Experiences', 2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600 dark:from-purple-300 dark:to-purple-500"
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-10 px-2"
          >
            A passionate Full Stack Developer dedicated to building high-performance,
            visually stunning, and user-centric web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mb-14 w-full px-2 lg:px-0 lg:justify-start justify-center"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-base md:text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(147,51,234,0.4)] hover:shadow-[0_0_50px_rgba(147,51,234,0.6)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href={cvFile}
              download="CV_Syahrul Ardi Prasetiyo.pdf"
              className="px-8 py-4 glass-strong border border-black/5 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold text-base md:text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5" /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex gap-8 items-center"
          >
            {[
              { icon: <Github className="w-7 h-7" />, link: socialLinks.github },
              { icon: <Linkedin className="w-7 h-7" />, link: socialLinks.linkedin },
              { icon: <Instagram className="w-7 h-7" />, link: socialLinks.instagram },
              { icon: <Mail className="w-7 h-7" />, link: `mailto:${socialLinks.mail}` },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -5, scale: 1.1 }}
                className="text-slate-400 dark:text-slate-500 hover:text-purple-500 transition-all drop-shadow-lg"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring', damping: 15 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-purple-500/20 dark:bg-purple-600/20 blur-3xl rounded-full animate-pulse-soft" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full p-[3px] bg-gradient-to-tr from-purple-600 via-violet-500 to-indigo-500 group-hover:from-purple-400 group-hover:via-violet-400 group-hover:to-indigo-500 transition-all duration-700">
              <div className="w-full h-full rounded-full bg-white dark:bg-[#0f0117] flex items-center justify-center overflow-hidden border-4 border-white dark:border-[#1e0533] shadow-2xl">
                <img
                  src={profile}
                  alt="Syahrul Ardi Prasetiyo - Full Stack Developer"
                  fetchpriority="high"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 border border-dashed border-purple-500/30 rounded-full -translate-y-2 group-hover:border-purple-500/60 transition-colors duration-700"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 px-4 py-2 lg:px-6 lg:py-3 glass-strong rounded-2xl border border-purple-500/30 shadow-2xl flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-[10px] lg:text-xs font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                Full Stack
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
