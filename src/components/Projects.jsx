import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import projectData from '../images/project/project.json';

const getProjectImage = (fileName) => {
  return new URL(`../images/project/${fileName}`, import.meta.url).href;
};

const Projects = () => {
  const projects = Object.values(projectData).map((project) => ({
    ...project,
    image: getProjectImage(project.image),
  }));

  return (
    <section id="projects" className="py-28 px-6 bg-transparent overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio
          </motion.div>

          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight"
          >
            My{' '}
            <span className="text-gradient-animated">Projects.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative"
            >
              <div className="relative glass-strong rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden shadow-lg transition-all group-hover:border-purple-500/50 group-hover:shadow-purple-500/10 group-hover:-translate-y-1">
                <div className="aspect-[16/9] relative overflow-hidden bg-black/5 dark:bg-white/[0.02]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-dark-900/90 via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-white text-[10px] font-bold uppercase tracking-widest border border-white/30 shadow-xl">
                      <ExternalLink className="w-3 h-3" />
                      Visit Project
                    </span>
                  </div>
                </div>

                <div className="p-5 bg-white/50 dark:bg-dark-900/50 border-t border-black/5 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {p.title}
                    </h3>
                    <span className="text-purple-600 dark:text-purple-400 text-[10px] font-bold uppercase tracking-widest group-hover:underline flex items-center gap-1">
                      Visit <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
