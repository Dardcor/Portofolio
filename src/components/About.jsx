import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Globe, Palette, Zap, ChevronRight } from 'lucide-react';

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

function Counter({ value, suffix, label, icon, delay }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const numValue = parseInt(value);
  const count = useCountUp(numValue, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="relative p-6 glass-strong rounded-2xl border border-black/5 dark:border-white/5 text-center group hover:border-purple-500/30 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="relative z-10">
        <div className="text-purple-600 dark:text-purple-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-3xl font-black text-slate-900 dark:text-white">
          {count}{suffix}
        </div>
        <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

const About = () => {
  const stats = [
    { icon: <Code2 className="w-6 h-6" />, value: '3', suffix: '+', label: 'Years Coding' },
    { icon: <Globe className="w-6 h-6" />, value: '10', suffix: '+', label: 'Projects Done' },
    { icon: <Palette className="w-6 h-6" />, value: '5', suffix: '+', label: 'Tech Mastered' },
    { icon: <Zap className="w-6 h-6" />, value: '99', suffix: '%', label: 'Client Satisfaction' },
  ];

  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-transparent overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 blur-3xl opacity-50" />
            <div className="relative z-10 p-2 glass-strong rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden group transition-all">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                alt="Full Stack Development - Coding workspace"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-200/50 dark:from-[#0f0117] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {['React', 'Next.js', 'Tailwind', 'TypeScript', 'Node.js'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 glass rounded-full text-purple-600 dark:text-purple-400 text-[9px] font-bold tracking-widest uppercase border border-purple-500/20 backdrop-blur-md shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="absolute top-6 right-6">
                    <span className="px-4 py-1.5 glass rounded-full text-purple-600 dark:text-purple-400 text-[10px] font-bold tracking-widest uppercase border border-purple-500/30 backdrop-blur-md shadow-lg">
                                    Full Stack Developer
                                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-black/5 dark:border-white/10 text-purple-600 dark:text-purple-400 font-black text-xs uppercase tracking-[0.3em] shadow-2xl mb-6"
            >
              <Sparkles className="w-4 h-4" />
              About Me
            </motion.div>

            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-10">
              <p>
                Sebagai{' '}
                <span className="text-slate-900 dark:text-white font-semibold">
                  Full Stack Developer
                </span>
                , saya adalah arsitek di balik bagian visual dan interaktif dari sebuah aplikasi
                web. Fokus utama saya adalah menjembatani kesenjangan antara desain grafis dan
                implementasi teknis.
              </p>
              <p>
                Saya bertanggung jawab untuk memastikan bahwa setiap interaksi pengguna terasa
                mulus, cepat, dan intuitif. Dengan menguasai teknologi modern seperti{' '}
                <span className="text-slate-900 dark:text-white font-medium">
                  React, Next.js, dan Tailwind CSS
                </span>
                , saya membangun antarmuka yang tidak hanya indah dipandang tetapi juga optimal
                secara performa.
              </p>
              <p>
                Keahlian saya mencakup penulisan kode yang bersih, implementasi desain responsif
                yang konsisten di semua perangkat, serta optimasi aksesibilitas sehingga website
                dapat dinikmati oleh siapa saja.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <Counter
                  key={stat.label}
                  icon={stat.icon}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
