import { motion } from 'framer-motion';
import { FolderCode, ExternalLink, Sparkles, Eye } from 'lucide-react';
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
    <section
      id="projects"
      className="py-32 px-6 bg-transparent overflow-hidden relative transition-colors duration-300"
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-black/5 dark:border-white/10 text-purple-600 dark:text-purple-400 font-black text-xs uppercase tracking-[0.4em] shadow-2xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>Portfolio</span>
          </motion.div>

          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter"
          >
            My{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-500">
              Projects.
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto px-2 md:px-0">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative w-full cursor-pointer h-full flex flex-col"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 blur opacity-0 group-hover:opacity-25 transition duration-700 rounded-lg" />

              <div className="relative glass-strong rounded-lg border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl transition-all flex flex-col h-full group-hover:border-purple-500/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] group-hover:-translate-y-1">
                <div className="aspect-[16/8] relative overflow-hidden bg-black/10 dark:bg-white/[0.02]">
                  <img
                    src={p.image}
                    alt={`${p.title} - Project Preview`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-200/90 dark:from-[#0f0117] dark:via-[#0f0117]/40 via-slate-100/20 to-transparent pointer-events-none" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-white text-xs font-black uppercase tracking-widest border border-white/30 backdrop-blur-md shadow-xl">
                      <Eye className="w-4 h-4" />
                      View Project
                    </span>
                  </div>
                </div>

                <div className="mt-auto p-6 md:p-8 bg-white/50 dark:bg-[#0f0117]/50 border-t border-black/5 dark:border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 font-bold">
                      <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                        <FolderCode className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-sm md:text-base text-slate-900 dark:text-white font-black group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {p.title}
                      </span>
                    </div>
                    <span className="text-purple-600 dark:text-purple-400 font-black uppercase tracking-widest text-[10px] group-hover:underline flex items-center gap-1">
                      Visit <ExternalLink className="w-3 h-3" />
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
