import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle, Sparkles } from 'lucide-react';

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
    },
    {
      title: 'Teknisi Jaringan (Magang)',
      company: 'PT GARUDA TELEKOMUNIKASI INDONESIA',
      location: 'Indonesia',
      date: '2023',
      desc: 'Menjalankan program magang profesional selama 4 bulan sebagai Teknisi Jaringan.',
      type: 'work',
      tasks: ['Network Technician', 'Maintenance Infrastruktur', 'Magang 4 Bulan'],
    },
    {
      title: 'Teknik Komputer dan Jaringan (TKJ)',
      company: 'SMK Antartika 2 Sidoarjo',
      location: 'Sidoarjo, Indonesia',
      date: '2021 - 2024',
      desc: 'Menyelesaikan pendidikan kejuruan dengan fokus pada instalasi jaringan.',
      type: 'edu',
      tasks: ['Lulusan SMK', 'Keahlian TKJ'],
    },
  ];

  return (
    <section id="experience" className="py-28 px-6 bg-transparent overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" />
            My Journey
          </motion.div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
            Pendidikan{' '}
            <span className="text-gradient-animated">& Pengalaman</span>
          </h2>
          <p className="max-w-xl text-slate-500 dark:text-slate-400 text-sm md:text-base">
            Perjalanan profesional saya dalam membangun karier di bidang teknologi.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto space-y-8">
          <div className="hidden md:block absolute top-0 bottom-0 left-8 w-[1.5px] bg-gradient-to-b from-purple-500/20 via-indigo-500/20 to-purple-500/20 rounded-full">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative flex gap-6 md:gap-10 items-start pl-0 md:pl-20"
            >
              <div className="hidden md:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 items-center justify-center z-20 shadow-lg shadow-purple-500/20 border-2 border-white dark:border-dark-900">
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>

              <div className="flex md:hidden w-10 h-10 mt-1 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
                {exp.type === 'work' ? (
                  <Briefcase className="w-4 h-4 text-white" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-white" />
                )}
              </div>

              <div className="group flex-1">
                <div className="relative p-6 md:p-8 rounded-2xl glass-strong border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-all hover:-translate-y-0.5 shadow-lg">
                  <div className="absolute -top-px left-8 right-8 h-[1.5px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent rounded-full" />

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 px-3 py-1 glass rounded-lg border border-black/5 dark:border-white/10 w-fit">
                      <Calendar className="w-3 h-3 text-purple-500" />
                      <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{exp.date}</span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>

                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{exp.desc}</p>

                    <ul className="space-y-1.5">
                      {exp.tasks.map((task) => (
                        <li key={task} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle className="w-3 h-3 text-purple-500 mt-0.5 shrink-0" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
