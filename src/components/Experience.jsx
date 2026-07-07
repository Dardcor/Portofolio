import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Teknik Informatika',
      company: 'Politeknik Elektronika Negeri Surabaya (PENS)',
      location: 'Surabaya, Indonesia',
      date: '2024 - Saat Ini',
      desc: 'Sedang menempuh pendidikan tinggi di jurusan D3 Teknik Informatika',
      type: 'edu',
      tasks: ['Mahasiswa Aktif', 'D3 Teknik Informatika'],
      gradient: 'from-purple-600 to-indigo-600',
    },
    {
      title: 'Teknisi Jaringan (Magang)',
      company: 'PT GARUDA TELEKOMUNIKASI INDONESIA',
      location: 'Indonesia',
      date: '2023',
      desc: 'Menjalankan program magang profesional selama 4 bulan sebagai Teknisi Jaringan, menangani infrastruktur telekomunikasi dan pemeliharaan sistem jaringan.',
      type: 'work',
      tasks: ['Network Technician', 'Maintenance Infrastruktur', 'Magang 4 Bulan'],
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Teknik Komputer dan Jaringan (TKJ)',
      company: 'SMK Antartika 2 Sidoarjo',
      location: 'Sidoarjo, Indonesia',
      date: '2021 - 2024',
      desc: 'Menyelesaikan pendidikan kejuruan dengan fokus pada instalasi jaringan, administrasi server, dan perangkat keras.',
      type: 'edu',
      tasks: ['Lulusan SMK', 'Keahlian TKJ'],
      gradient: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-12 scroll-mt-20 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 glass rounded-full border border-black/5 dark:border-white/10 text-purple-600 dark:text-purple-400 font-black text-xs uppercase tracking-[0.4em] shadow-2xl"
          >
            <Sparkles className="w-4 h-4" />
            <span>My Journey</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tight px-4">
            Pendidikan{' '}
            <span className="text-purple-600 dark:text-purple-400">& Pengalaman</span>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm md:text-base px-6">
            Perjalanan profesional saya dalam membangun karier di bidang teknologi dan inovasi
            digital.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto space-y-12 px-2 md:px-0">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500/50 via-indigo-500/50 to-purple-500/50 rounded-full">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-500 rounded-full"
              style={{ height: '100%' }}
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title + idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative flex items-start justify-between md:flex-row flex-col gap-8 md:gap-0 ${
                idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="hidden md:flex absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 items-center justify-center z-20 shadow-xl shadow-purple-500/30 border-4 border-white dark:border-[#0f0117]">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              <div className="w-full md:w-[45%] group">
                <div className="relative p-8 rounded-3xl glass-strong border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-1 shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]">
                  <div className="absolute -top-px left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full" />

                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                    {exp.type === 'work' ? (
                      <Briefcase className="w-20 h-20 text-purple-600 dark:text-purple-400" />
                    ) : (
                      <GraduationCap className="w-20 h-20 text-indigo-600 dark:text-indigo-400" />
                    )}
                  </div>

                  <div className="flex flex-col gap-4 relative z-10">
                    <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg border border-black/5 dark:border-white/10 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">
                        {exp.date}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-bold text-slate-500 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase tracking-tight">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                      {exp.desc}
                    </p>

                    <ul className="space-y-2">
                      {exp.tasks.map((task) => (
                        <li
                          key={task}
                          className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300 transition-colors"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-purple-600 dark:text-purple-500 mt-0.5 shrink-0" />
                          <span className="leading-tight">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="hidden md:block w-full md:w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
