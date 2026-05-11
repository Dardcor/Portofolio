import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ChevronRight, ShieldCheck, Calendar } from 'lucide-react';
import certData from '../images/certificate/certificate.json';

const getCertImage = (fileName) => {
    return new URL(`../images/certificate/${fileName}`, import.meta.url).href;
};

const Certificates = () => {
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const certificateGroups = Object.entries(certData).map(([key, data], index) => ({
        id: index + 1,
        title: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        issuer: data.description.split(' ').slice(1).join(' '),
        year: data.description.split(' ')[0],
        coverImage: getCertImage(data.image),
        description: data.description,
        images: [
            {
                src: getCertImage(data.image),
                title: key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                subtitle: 'Verified Achievement'
            }
        ]
    }));

    const openModal = (group) => {
        setSelectedGroup(group);
        setCurrentImgIndex(0);
    };

    const nextImg = () => {
        if (!selectedGroup) return;
        setCurrentImgIndex((prev) => (prev + 1) % selectedGroup.images.length);
    };

    const prevImg = () => {
        if (!selectedGroup) return;
        setCurrentImgIndex((prev) => (prev - 1 + selectedGroup.images.length) % selectedGroup.images.length);
    };

    return (
        <section id="certificates" className="py-32 px-6 bg-transparent overflow-hidden relative transition-colors duration-300">
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
                        <ShieldCheck className="w-5 h-5" />
                        <span>Certification</span>
                    </motion.div>

                    <motion.h2
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter"
                    >
                        My <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-500">Certificate.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto px-2 md:px-0">
                    {certificateGroups.map((group, index) => (
                        <motion.div
                            key={group.id}
                            whileInView={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onClick={() => openModal(group)}
                            className="group relative w-full cursor-pointer h-full flex flex-col"
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-indigo-500 blur opacity-0 group-hover:opacity-20 transition duration-700" />

                            <div className="relative glass rounded-lg border border-black/10 dark:border-white/10 overflow-hidden shadow-2xl transition-all flex flex-col h-full">
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <img
                                        src={group.coverImage}
                                        alt={group.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-200/90 dark:from-[#0f0117] dark:via-[#0f0117]/40 via-slate-100/20 to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">
                                        <div className="space-y-1 md:space-y-2 text-left">
                                            <p className="text-purple-600 dark:text-purple-400 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">{group.issuer}</p>
                                            <h3 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                                {group.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-auto p-6 md:p-8 bg-black/5 dark:bg-white/5 border-t border-black/5 dark:border-white/5">
                                    <div className="flex items-center justify-between text-[10px] md:text-sm">
                                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-bold">
                                            <Award className="w-3 h-3 md:w-4 md:h-4 text-purple-600 dark:text-purple-400" />
                                            {group.description}
                                        </div>
                                        <span className="text-purple-600 dark:text-purple-400 font-black uppercase tracking-widest text-[9px] md:text-[10px] group-hover:underline">Detail</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Modal Backdrop */}
            <AnimatePresence>
                {selectedGroup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-[#0f0117]/95 backdrop-blur-3xl overflow-y-auto"
                    >
                        {/* Close Button Overlay */}
                        <div
                            className="absolute inset-0 z-0 cursor-pointer"
                            onClick={() => setSelectedGroup(null)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
                            className="relative z-10 w-full max-w-6xl bg-white dark:bg-[#1a0b2e] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.3)] border border-white/10 flex flex-col lg:flex-row h-full max-h-[90vh]"
                        >
                            {/* Left Side: Image Viewer */}
                            <div className="lg:w-2/3 bg-black/40 flex items-center justify-center p-4 md:p-12 relative group/viewer overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent pointer-events-none" />
                                <motion.img
                                    initial={{ opacity: 0, rotate: -2 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    src={selectedGroup.images[currentImgIndex].src}
                                    alt={selectedGroup.images[currentImgIndex].title}
                                    className="w-full h-full object-contain rounded-xl md:rounded-3xl shadow-2xl relative z-10"
                                />
                                <button
                                    onClick={() => setSelectedGroup(null)}
                                    className="lg:hidden absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md rounded-full text-white"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Right Side: Content Details */}
                            <div className="lg:w-1/3 p-8 md:p-14 flex flex-col justify-between bg-white dark:bg-[#1a0b2e] relative">
                                <div className="absolute top-0 right-0 p-8 hidden lg:block">
                                    <button
                                        onClick={() => setSelectedGroup(null)}
                                        className="p-4 glass rounded-2xl border border-black/5 dark:border-white/10 text-slate-400 hover:text-purple-500 hover:border-purple-500 transition-all"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 px-4 py-1.5 w-fit glass rounded-full border border-purple-500/30 text-purple-600 dark:text-purple-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                            <ShieldCheck className="w-4 h-4" />
                                            Verified Credential
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tighter">
                                            {selectedGroup.title}
                                        </h3>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex gap-6 items-start">
                                            <div className="p-3 bg-purple-500/10 rounded-2xl border border-purple-500/20">
                                                <Award className="w-6 h-6 text-purple-500" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Issued By</p>
                                                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{selectedGroup.issuer}</p>
                                            </div>
                                        </div>

                                        <div className="flex gap-6 items-start">
                                            <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                                                <Calendar className="w-6 h-6 text-indigo-500" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Date Earned</p>
                                                <p className="text-lg font-bold text-slate-800 dark:text-slate-200">{selectedGroup.year}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-purple-500/30 pl-6 py-2">
                                        {selectedGroup.description}
                                    </p>
                                </div>

                                <div className="pt-10 flex flex-col gap-4">
                                    <a
                                        href={selectedGroup.images[currentImgIndex].src}
                                        download
                                        className="w-full py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-500/20 hover:scale-[1.02] active:scale-95"
                                    >
                                        Download Certificate <ChevronRight className="w-5 h-5" />
                                    </a>
                                    <p className="text-[10px] text-center text-slate-500 dark:text-slate-500 font-medium uppercase tracking-widest">
                                        ID: CERT-00{selectedGroup.id}-2026
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certificates;
