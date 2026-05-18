import { motion } from 'framer-motion';
import { FolderCode } from 'lucide-react';
import projectData from '../images/project/project.json';

const getProjectImage = (fileName) => {
    return new URL(`../images/project/${fileName}`, import.meta.url).href;
};

const Projects = () => {
    const projects = Object.values(projectData).map(project => ({
        ...project,
        image: getProjectImage(project.image)
    }));

    return (
        <section id="projects" className="py-32 px-6 bg-transparent overflow-hidden relative transition-colors duration-300">
            {/* Background Decorative Elements */}
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
                        <FolderCode className="w-5 h-5" />
                        <span>Projects</span>
                    </motion.div>

                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter"
                    >
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-500">Projects.</span>
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
                            {/* Glow Effect on Hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 blur opacity-0 group-hover:opacity-20 transition duration-700" />

                            <div className="relative glass rounded-lg border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl transition-all flex flex-col h-full">
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-200/90 dark:from-[#0f0117] dark:via-[#0f0117]/40 via-slate-100/20 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">
                                        <div className="space-y-1 md:space-y-2 text-left">
                                            <h3 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {p.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto p-6 md:p-8 bg-black/5 dark:bg-white/5 border-t border-black/5 dark:border-white/5">
                                    <div className="flex items-center justify-between text-[10px] md:text-sm">
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold">
                                            <FolderCode className="w-3 h-3 md:w-4 md:h-4 text-purple-600 dark:text-purple-400" />
                                            Live Web Showcase
                                        </div>
                                        <span className="text-purple-600 dark:text-purple-400 font-black uppercase tracking-widest text-[9px] md:text-[10px] group-hover:underline">Visit</span>
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


