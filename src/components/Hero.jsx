import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight, Github, Linkedin, Instagram, Mail, Sparkles } from 'lucide-react';
import profile from '../images/random/profile.png';
import socialLinks from '../link_media/link.json';
import ThreeScene from './ThreeScene.jsx';

const cvFile = '/CV_Syahrul Ardi Prasetiyo.pdf';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      style={{ scale, opacity }}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent"
    >
      <ThreeScene />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#02000a] pointer-events-none z-[1]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-16 lg:gap-24 px-6 py-36 lg:py-40"
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-2 lg:order-1">
          <div className="mb-6 space-y-6">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Full Stack Developer
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight text-slate-900 dark:text-white leading-[0.95]">
              Hi, I'm{' '}
              <span className="text-gradient-animated inline-block">
                Syahrul
              </span>
              <br />
              <span className="text-gradient-animated inline-block" style={{ animationDelay: '0.3s' }}>
                Ardi Prasetiyo
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
              <TypeAnimation
                sequence={[
                  'I Build Modern Websites', 2000,
                  'I\'m a Full Stack Developer', 2000,
                  'I Craft Digital Experiences', 2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-gradient"
              />
            </motion.div>

            <motion.p variants={itemVariants} className="max-w-xl text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              A passionate Full Stack Developer dedicated to building high-performance,
              visually stunning, and user-centric web applications.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <a
              href="#projects"
              className="group relative px-8 py-3.5 bg-purple-600 text-white rounded-full font-medium text-base overflow-hidden transition-all hover:bg-purple-700 active:scale-95 shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href={cvFile}
              download="CV_Syahrul Ardi Prasetiyo.pdf"
              className="px-8 py-3.5 glass-strong border border-black/5 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-medium text-base hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] active:scale-95"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 items-center">
            {[
              { icon: <Github className="w-5 h-5" />, link: socialLinks.github },
              { icon: <Linkedin className="w-5 h-5" />, link: socialLinks.linkedin },
              { icon: <Instagram className="w-5 h-5" />, link: socialLinks.instagram },
              { icon: <Mail className="w-5 h-5" />, link: `mailto:${socialLinks.mail}` },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-slate-400 dark:text-slate-500 hover:text-purple-500 transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-8 bg-gradient-to-tr from-purple-600/20 via-indigo-600/10 to-cyan-500/10 blur-3xl rounded-full animate-breath" />
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full p-[2px] bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 group-hover:from-purple-400 group-hover:via-indigo-400 group-hover:to-cyan-300 transition-all duration-700">
                <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center overflow-hidden border-2 border-white/50 dark:border-dark-700/50 shadow-2xl">
                  <img
                    src={profile}
                    alt="Syahrul Ardi Prasetiyo"
                    fetchpriority="high"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 border border-dashed border-purple-500/20 rounded-full group-hover:border-purple-500/40 transition-colors duration-700"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: 'spring' }}
              className="absolute -bottom-3 -right-3 lg:-bottom-4 lg:-right-4 px-4 py-2 glass-strong rounded-xl border border-purple-500/20 shadow-xl flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-500" />
              <span className="text-[9px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                Full Stack
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
