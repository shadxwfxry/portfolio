"use client";

import { motion } from 'framer-motion';
import { useLangStore, dict } from '../lib/i18n';
import { projectLinks } from '../lib/links';
import { projectsList } from '../lib/projectsData'; // Импортируем наш новый список

export default function ProjectsGrid() {
    const { lang } = useLangStore();
    const t = dict[lang].projects;

    return (
        <section className="relative z-10 py-24 px-6 md:px-12 max-w-6xl mx-auto">
            <div className="mb-16">
                <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-blue-500 uppercase mb-2">
                    <div className="w-4 h-px bg-blue-500"></div>
                    {t.badge}
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">{t.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsList.map((project) => {
                    // 1. Берем перевод из словаря по ID из нашего списка
                    const info = t.items[project.id as keyof typeof t.items];
                    // 2. Берем ссылку из links.ts по ключу
                    const link = projectLinks[project.linkKey] || "#";

                    return (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-blue-500/30 transition-all overflow-hidden"
                        >
                            {/* Выводим статус (Active, Deployed и т.д.) */}
                            <div className="text-[10px] font-bold text-blue-400 mb-4 tracking-widest uppercase">
                                {project.status}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {info.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                {info.desc}
                            </p>

                            <div className="flex items-center gap-4">
                                <a href={link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}