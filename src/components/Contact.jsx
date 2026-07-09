import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, Linkedin, Github, Instagram, User, Sparkles } from 'lucide-react';
import socialLinks from '../link_media/link.json';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const contactInfo = [
    { icon: <Mail />, title: 'Email', value: socialLinks.mail },
    { icon: <MapPin />, title: 'Location', value: 'Sidoarjo, Jawa Timur, Indonesia' },
  ];

  const socialPlatforms = [
    { Icon: Github, link: socialLinks.github },
    { Icon: Linkedin, link: socialLinks.linkedin },
    { Icon: Instagram, link: socialLinks.instagram },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Harap isi semua kolom formulir!' });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('message', formData.message);
      params.append('_subject', `Pesan Portfolio Baru dari ${formData.name}`);

      const response = await fetch(`https://formsubmit.co/ajax/${socialLinks.mail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Accept: 'application/json' },
        body: params.toString(),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      if (data.success === true || data.success === 'true' || data.message?.toLowerCase().includes('success')) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus((prev) => ({ ...prev, submitted: false })), 5000);
      } else {
        throw new Error(data.message || 'Gagal mengirim pesan.');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: `Gagal mengirim otomatis. Silakan kirim email manual ke: ${socialLinks.mail}`,
      });
    }
  };

  return (
    <section id="contact" className="py-28 px-6 bg-transparent overflow-hidden relative">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full border border-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-medium tracking-wider"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </motion.div>

          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Let's <span className="text-gradient-animated">Connect.</span>
          </motion.h2>

          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto"
          >
            Siap mengubah ide brilian Anda menjadi kenyataan digital? Saya siap membantu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display">Contact Information</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Jangan ragu untuk menghubungi saya melalui saluran berikut.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 glass-strong rounded-xl border border-black/5 dark:border-white/5 group transition-all hover:border-purple-500/30"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.title}</h4>
                    <p className="text-sm font-medium text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="p-5 glass-strong rounded-2xl border border-black/5 dark:border-white/5 shadow-lg">
              <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 text-center">Follow My Digital Journey</h4>
              <div className="flex justify-center gap-3">
                {socialPlatforms.map(({ Icon, link }, idx) => (
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 glass rounded-xl border border-black/5 dark:border-white/10 text-slate-400 dark:text-slate-500 hover:text-purple-500 hover:border-purple-500/30 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-10 glass-strong rounded-[2rem] border border-black/5 dark:border-white/5 shadow-lg space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
                  <div className="relative">
                    <input
                      type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Enter your name" required
                      className="w-full px-4 py-3.5 pl-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all text-slate-900 dark:text-white outline-none font-medium placeholder:text-slate-400 text-sm"
                    />
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
                  <div className="relative">
                    <input
                      type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.com" required
                      className="w-full px-4 py-3.5 pl-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all text-slate-900 dark:text-white outline-none font-medium placeholder:text-slate-400 text-sm"
                    />
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider ml-1">Your Message</label>
                <div className="relative">
                  <textarea
                    rows="4" name="message" value={formData.message} onChange={handleChange}
                    placeholder="Tell me about your project..." required
                    className="w-full px-4 py-3.5 pl-10 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/10 transition-all text-slate-900 dark:text-white outline-none font-medium placeholder:text-slate-400 resize-none text-sm"
                  />
                  <MessageSquare className="absolute left-3.5 top-4 w-4 h-4 text-slate-400" />
                </div>
              </div>

              {status.error && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 font-medium text-xs text-center">
                  {status.error}
                </motion.div>
              )}

              {status.submitted && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-medium text-xs text-center">
                  Pesan berhasil dikirim! Terima kasih.
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: status.submitting ? 1 : 1.02 }}
                whileTap={{ scale: status.submitting ? 1 : 0.98 }}
                type="submit"
                disabled={status.submitting}
                className={`group relative w-full py-4 bg-purple-600 text-white font-medium rounded-xl text-base overflow-hidden transition-all shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 ${status.submitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:bg-purple-700'}`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status.submitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
