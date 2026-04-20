"use client";

import { motion } from 'framer-motion';
import { ChevronDown, Mail, Send } from 'lucide-react';
import { useLangStore, dict } from '../lib/i18n';
import SkillRadar from './SkillRadar'; // Импортируем радар

export default function Hero() {
    const { lang } = useLangStore();
    const t = dict[lang].hero;

    const techStack = [
        "React", "Next.js", "TypeScript", "Node.js", "Express",
        "Tailwind CSS", "Linux", "Kali Linux", "Alpine Linux",
        "Bash", "Python", "Networking"
    ];

    return (
        <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 md:px-12 max-w-6xl mx-auto overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        ONLINE // SURFACE_LAYER_v2.4.1
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-500">
                        Artem<br />Zhosan
                    </h1>

                    <p
                        className="text-lg md:text-xl text-gray-400 mb-8 font-medium"
                        dangerouslySetInnerHTML={{ __html: t.role }}
                    />

                    <p
                        className="max-w-2xl text-gray-400 leading-relaxed mb-10"
                        dangerouslySetInnerHTML={{ __html: t.bio }}
                    />

                    <div className="flex flex-wrap items-center gap-4 mb-16">
                        <a
                            href="#terminal-section"
                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all hover:-translate-y-1"
                        >
                            <ChevronDown size={18} />
                            {t.btn}
                        </a>

                        <div className="flex gap-2">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shadxwfxry@gmail.com" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-lg border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 text-gray-400 hover:text-white" title="Gmail"><Mail size={20} /></a>
                            <a href="https://t.me/shadxwfxry" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-lg border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 text-gray-400 hover:text-[#229ED9]" title="Telegram"><Send size={20} /></a>
                            <a href="https://instagram.com/shadxwfxry" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-lg border border-white/10 hover:bg-white/5 transition-all hover:border-white/30 text-gray-400 hover:text-[#E1306C]" title="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 max-w-3xl">
                        {techStack.map((tech, index) => (
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + index * 0.03 }}
                                key={tech}
                                className="px-3 py-1 text-xs text-gray-400 bg-white/5 border border-white/10 rounded-md hover:border-blue-400/50 hover:text-blue-300 hover:bg-blue-500/10 cursor-default transition-colors"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Радар-чарт справа */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex justify-center"
                >
                    <SkillRadar />
                </motion.div>
            </div>
        </section>
    );
}