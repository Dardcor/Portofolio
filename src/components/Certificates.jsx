import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ShieldCheck, Calendar, Sparkles, Download } from 'lucide-react';
import certData from '../images/certificate/certificate.json';

const getCertImage = (fileName) => {
  return new URL(`../images/certificate/${fileName}`, import.meta.url).href;
};

const Certificates = () => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [currentImgIndex] = useState(0);

  const certificateGroups = Object.entries(certData).map(([key, data], index) => ({
    id: index + 1,
    title: key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    issuer: data.description.split(' ').slice(1).join(' '),
    year: data.description.split(' ')[0],
    coverImage: getCertImage(data.image),
    description: data.description,
    images: [{
      src: getCertImage(data.image),
      title: key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    }],
  }));

  return (
    <section id="certificates" className="py-28 px-6 bg-transparent overflow-hidden relative">
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
            <ShieldCheck className="w-3.5 h-3.5" />
            Certification
          </motion.div>

          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight"
          >
            My{' '}
            <span className="text-gradient-animated">Certificate.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificateGroups.map((group, index) => (
            <motion.div
              key={group.id}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedGroup(group)}
              className="group relative cursor-pointer"
            >
              <div className="relative glass-strong rounded-2xl border border-black/5 dark:border-white/10 overflow-hidden shadow-lg transition-all group-hover:border-purple-500/50 group-hover:shadow-purple-500/10 group-hover:-translate-y-1">
                <div className="absolute top-3 left-3 z-20">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 glass rounded-full text-purple-600 dark:text-purple-400 text-[8px] font-bold uppercase tracking-widest border border-purple-500/30">
                    <Award className="w-2.5 h-2.5" />
                    Verified
                  </span>
                </div>

                <div className="aspect-[16/10] relative overflow-hidden">
                  <img
                    src={group.coverImage}
                    alt={group.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-dark-900/90 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[9px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-0.5">
                      {group.issuer}
                    </p>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {group.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-white/50 dark:bg-dark-900/50 border-t border-black/5 dark:border-white/5">
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                      <Calendar className="w-3 h-3 text-purple-500" />
                      {group.year}
                    </div>
                    <span className="text-purple-600 dark:text-purple-400 font-medium uppercase tracking-widest group-hover:underline">
                      Detail
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-dark-950/95 backdrop-blur-2xl overflow-y-auto"
          >
            <div className="absolute inset-0 z-0 cursor-pointer" onClick={() => setSelectedGroup(null)} />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
              className="relative z-10 w-full max-w-5xl bg-white dark:bg-dark-800 rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.2)] border border-purple-500/10 flex flex-col lg:flex-row max-h-[85vh]"
            >
              <div className="lg:w-3/5 bg-black/30 flex items-center justify-center p-6 md:p-10 relative">
                <motion.img
                  initial={{ opacity: 0, rotate: -1 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  src={selectedGroup.images[currentImgIndex].src}
                  alt={selectedGroup.title}
                  className="w-full h-full object-contain rounded-xl shadow-2xl"
                />
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="lg:hidden absolute top-4 right-4 p-2.5 bg-white/10 backdrop-blur-md rounded-full text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="lg:w-2/5 p-8 md:p-10 flex flex-col justify-between bg-white dark:bg-dark-800 relative">
                <div className="absolute top-0 right-0 p-6 hidden lg:block">
                  <button
                    onClick={() => setSelectedGroup(null)}
                    className="p-3 glass rounded-xl border border-black/5 dark:border-white/10 text-slate-400 hover:text-purple-500 hover:border-purple-500 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 glass rounded-full border border-purple-500/20 text-purple-600 dark:text-purple-400 text-[9px] font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Credential
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white leading-tight font-display">
                      {selectedGroup.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 bg-purple-500/10 rounded-xl border border-purple-500/20">
                        <Award className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Issued By</p>
                        <p className="text-base font-bold text-slate-800 dark:text-slate-200">{selectedGroup.issuer}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="p-2.5 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                        <Calendar className="w-5 h-5 text-indigo-500" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Date Earned</p>
                        <p className="text-base font-bold text-slate-800 dark:text-slate-200">{selectedGroup.year}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed border-l-2 border-purple-500/30 pl-4 py-1">
                    {selectedGroup.description}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={selectedGroup.images[currentImgIndex].src}
                    download
                    className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium flex items-center justify-center gap-2.5 transition-all shadow-lg shadow-purple-500/20 hover:scale-[1.02] active:scale-95 text-sm"
                  >
                    Download Certificate <Download className="w-4 h-4" />
                  </a>
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
