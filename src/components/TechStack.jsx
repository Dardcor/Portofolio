import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Server, Layers } from 'lucide-react';

function SkillBar({ label, percentage, icon, color, delay }) {
  const [inView, setInView] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setWidth(percentage), 300 + delay);
    return () => clearTimeout(timer);
  }, [inView, percentage, delay]);

  return (
    <motion.div
      ref={ref}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className={`p-1.5 rounded-lg ${color.bg} ${color.text}`}>{icon}</div>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">{label}</span>
        </div>
        <span className={`text-base font-bold ${color.text}`}>{inView ? percentage : 0}%</span>
      </div>
      <div className="relative h-2.5 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden border border-black/5 dark:border-white/10">
        <div
          className={`absolute inset-y-0 left-0 rounded-full transition-all duration-[1500ms] ease-out ${color.bar}`}
          style={{ width: `${width}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-fast" />
        </div>
      </div>
    </motion.div>
  );
}

const TechStack = () => {
  const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'Frontend' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'Frontend' },
    { name: 'JAVASCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'Frontend' },
    { name: 'TAILWIND', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg', category: 'Frontend' },
    { name: 'REACT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Frontend' },
    { name: 'TYPESCRIPT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Frontend' },
    { name: 'NEXT.JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'Frontend' },
    { name: 'NODE.JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Backend' },
    { name: 'LARAVEL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', category: 'Backend' },
    { name: 'NEST.JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', category: 'Backend' },
    { name: 'FLUTTER', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', category: 'Mobile' },
    { name: 'SUPABASE', icon: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg', category: 'Backend' },
    { name: 'GIT', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'Tools' },
    { name: 'DOCKER', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Tools' },
  ];

  const skillCategories = [
    {
      label: 'Front End', percentage: 40,
      icon: <Code2 className="w-4 h-4" />,
      color: { text: 'text-purple-500', bg: 'bg-purple-500/10', bar: 'bg-gradient-to-r from-purple-500 to-violet-500' },
    },
    {
      label: 'Backend', percentage: 30,
      icon: <Server className="w-4 h-4" />,
      color: { text: 'text-indigo-500', bg: 'bg-indigo-500/10', bar: 'bg-gradient-to-r from-indigo-500 to-blue-500' },
    },
    {
      label: 'Full Stack', percentage: 75,
      icon: <Layers className="w-4 h-4" />,
      color: { text: 'text-cyan-500', bg: 'bg-cyan-500/10', bar: 'bg-gradient-to-r from-cyan-500 to-teal-500' },
    },
  ];

  const row1 = [...skills, ...skills];
  const row2 = [...skills, ...skills].reverse();

  return (
    <section id="skills" className="py-28 bg-transparent overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white dark:from-dark-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-dark-950 to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.9 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium tracking-wider mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          Tech Stack
        </motion.div>

        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
        >
          Technical{' '}
          <span className="text-gradient-animated">Toolkit.</span>
        </motion.h2>
        <motion.p
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto"
        >
          Teknologi pilihan untuk membangun solusi digital berperforma tinggi.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto px-6 mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillBar key={cat.label} label={cat.label} percentage={cat.percentage} icon={cat.icon} color={cat.color} delay={i * 200} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex overflow-hidden mask-fade">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 whitespace-nowrap px-4"
          >
            {row1.map((skill, i) => (
              <div key={i} className="px-6 py-3.5 glass-strong rounded-2xl border border-black/5 dark:border-white/5 flex items-center gap-3 group hover:border-purple-500/30 transition-all hover:scale-105 shadow-lg">
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                <span className="text-base md:text-lg font-bold text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden mask-fade">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="flex gap-4 whitespace-nowrap px-4"
          >
            {row2.map((skill, i) => (
              <div key={i} className="px-6 py-3.5 glass-strong rounded-2xl border border-black/5 dark:border-white/5 flex items-center gap-3 group hover:border-indigo-500/30 transition-all hover:scale-105 shadow-lg">
                <img src={skill.icon} alt={skill.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                <span className="text-base md:text-lg font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-wide">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 w-20 md:w-64 bg-gradient-to-r from-white dark:from-dark-950 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-64 bg-gradient-to-l from-white dark:from-dark-950 to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default TechStack;
