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
        <section id="projects" className="py-32 px-6 bg-transparent overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="flex justify-center">
                    <div className="max-w-2xl space-y-6 text-center w-full">
                        <div className="flex items-center justify-center gap-3 text-purple-500 dark:text-purple-400 font-bold uppercase tracking-[0.3em] text-sm">
                            <FolderCode className="w-5 h-5" />
                            <span>Projects</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
                            My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Projects.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                    {projects.map((p, i) => (
                        <motion.a
                            key={p.title}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="group relative flex flex-col glass rounded-lg border border-black/10 dark:border-white/10 hover:border-purple-500/30 transition-all duration-500 shadow-2xl overflow-hidden cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <div className="w-full h-full overflow-hidden relative">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-200 dark:from-[#0f0117] via-transparent to-transparent opacity-60 transition-opacity duration-500" />
                                </div>
                            </div>

                            <div className="p-8 md:p-10 text-center">
                                <h3 className="text-4xl font-black text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 uppercase tracking-tighter italic">
                                    {p.title}
                                </h3>
                            </div>

                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;


