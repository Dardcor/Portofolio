import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, ChevronRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import profile from '../images/random/profile.png';
import socialLinks from '../link_media/link.json';

const cvFile = '/CV_Syahrul Ardi Prasetiyo.pdf';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden py-32 px-6 bg-transparent transition-colors duration-300">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full animate-pulse" />
                <div className="cyber-grid absolute inset-0 opacity-20 dark:opacity-10" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12 lg:gap-20">
                {/* Text Content (Left Side) */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 order-2 lg:order-1">


                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-8 space-y-4"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                            Hi, I'm <br className="hidden lg:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600">Syahrul Ardi Prasetiyo</span>
                        </h1>

                        <div className="text-xl md:text-3xl lg:text-4xl font-bold text-slate-700 dark:text-slate-300">
                            <TypeAnimation
                                sequence={[
                                    'I build Modern Websites', 2000,
                                    'I Frontend Developer', 2000,
                                    'I craft Digital Experiences', 2000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-700 dark:from-purple-300 dark:to-purple-500"
                            />
                        </div>
                    </motion.div>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="max-w-2xl text-slate-600 dark:text-slate-400 text-base md:text-xl leading-relaxed mb-12 px-2"
                    >
                        A passionate Front-End Developer dedicated to building high-performance,
                        visually stunning, and user-centric web applications.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-5 mb-14 w-full px-2 lg:px-0 lg:justify-start justify-center"
                    >
                        <a href="#projects" className="group relative px-8 py-4 bg-purple-600 text-white dark:text-white rounded-full font-bold text-base md:text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(147,51,234,0.4)]">
                            <span className="relative z-10 flex items-center justify-center gap-2 text-center">
                                View My Work <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </a>

                        <a
                            href={cvFile}
                            download="CV_Syahrul Ardi Prasetiyo.pdf"
                            className="px-8 py-4 glass border border-black/5 dark:border-white/10 text-slate-900 dark:text-white rounded-full font-bold text-base md:text-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95 cursor-pointer"
                        >
                            <Download className="w-5 h-5" /> Download CV
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex gap-8 items-center"
                    >
                        {[
                            { icon: <Github className="w-7 h-7" />, link: socialLinks.github },
                            { icon: <Linkedin className="w-7 h-7" />, link: socialLinks.linkedin },
                            { icon: <Instagram className="w-7 h-7" />, link: socialLinks.instagram },
                            { icon: <Mail className="w-7 h-7" />, link: `mailto:${socialLinks.mail}` }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.link}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className="text-slate-400 dark:text-slate-500 hover:text-purple-500 transition-all drop-shadow-lg"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Hero Image (Right Side) */}
                <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: 'spring', damping: 15 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-purple-500/20 dark:bg-purple-600/20 blur-3xl rounded-full" />
                        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] rounded-full p-2 bg-gradient-to-tr from-purple-600 via-indigo-500 to-purple-400 relative">
                            <div className="w-full h-full rounded-full bg-white dark:bg-[#0f0117] flex items-center justify-center overflow-hidden border-4 border-white dark:border-[#1e0533] shadow-2xl">
                                <img
                                    src={profile}
                                    alt="Syahrul Ardi Prasetiyo"
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border border-dashed border-purple-500/30 rounded-full -translate-y-2"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

