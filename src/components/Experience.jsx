import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'Teknik Informatika',
            company: 'Politeknik Elektronika Negeri Surabaya (PENS)',
            location: 'Surabaya, Indonesia',
            date: '2024 - Saat Ini',
            desc: 'Sedang menempuh pendidikan tinggi di jurusan D3 Teknik Informatika',
            type: 'edu',
            tasks: ['Mahasiswa Aktif', 'D3 Teknik Informatika']
        },
        {
            title: 'Teknisi Jaringan (Magang)',
            company: 'PT GARUDA TELEKOMUNIKASI INDONESIA',
            location: 'Indonesia',
            date: '2023',
            desc: 'Menjalankan program magang profesional selama 4 bulan sebagai Teknisi Jaringan, menangani infrastruktur telekomunikasi dan pemeliharaan sistem jaringan.',
            type: 'work',
            tasks: ['Network Technician', 'Maintenance Infrastruktur', 'Magang 4 Bulan']
        },
        {
            title: 'Teknik Komputer dan Jaringan (TKJ)',
            company: 'SMK Antartika 2 Sidoarjo',
            location: 'Sidoarjo, Indonesia',
            date: '2021 - 2024',
            desc: 'Menyelesaikan pendidikan kejuruan dengan fokus pada instalasi jaringan, administrasi server, dan perangkat keras.',
            type: 'edu',
            tasks: ['Lulusan SMK', 'Keahlian TKJ']
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12 scroll-mt-20 bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tight px-4">
                        Pendidikan <span className="text-purple-600 dark:text-purple-400">& Pengalaman</span>
                    </h2>
                    <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm md:text-base px-6">
                        Perjalanan profesional saya dalam membangun karier di bidang teknologi dan inovasi digital.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto space-y-12 after:absolute after:inset-y-0 after:left-7 md:after:left-1/2 after:w-0.5 after:bg-slate-200 dark:after:bg-slate-800 after:hidden md:after:block px-2 md:px-0">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={exp.title + idx}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className={`relative flex items-center justify-between md:flex-row flex-col gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border-2 border-slate-200 dark:border-slate-700 items-center justify-center z-20 group hover:border-purple-500 shadow-xl transition-all">
                                <div className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 group-hover:scale-150 transition-transform" />
                            </div>

                            <div className="w-full md:w-[45%] group">
                                <div className="relative p-8 rounded-3xl glass border border-black/5 dark:border-white/5 hover:border-purple-500/30 transition-all hover:translate-y-[-5px]">
                                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                                        {exp.type === 'work' ? <Briefcase className="w-20 h-20 text-purple-600 dark:text-purple-400" /> : <GraduationCap className="w-20 h-20 text-indigo-600 dark:text-indigo-400" />}
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center gap-2 px-3 py-1 glass rounded-lg border border-black/5 dark:border-white/10 w-fit">
                                            <Calendar className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">{exp.date}</span>
                                        </div>

                                        <div className="space-y-1">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{exp.title}</h3>
                                            <p className="text-sm font-bold text-slate-500 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors uppercase tracking-tight">{exp.company}</p>
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                                            <MapPin className="w-3.5 h-3.5" />
                                            {exp.location}
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{exp.desc}</p>

                                        <ul className="space-y-2">
                                            {exp.tasks.map((task) => (
                                                <li key={task} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300 transition-colors">
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
