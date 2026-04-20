"use client";

import { motion } from 'framer-motion';
import { useLangStore, dict } from '../lib/i18n';

export default function SkillRadar() {
    const { lang } = useLangStore();
    const t = dict[lang].radar;

    // Твои реальные показатели (от 0 до 100)
    const skills = [
        { label: t.frontend, value: 85 },
        { label: t.backend, value: 75 },
        { label: t.systems, value: 95 },
        { label: t.security, value: 80 },
        { label: t.hardware, value: 70 },
    ];

    const size = 300;
    const center = size / 2;
    const radius = size * 0.4;
    const angleStep = (Math.PI * 2) / skills.length;

    // Генерируем точки для многоугольника
    const points = skills.map((s, i) => {
        const x = center + (radius * s.value / 100) * Math.cos(i * angleStep - Math.PI / 2);
        const y = center + (radius * s.value / 100) * Math.sin(i * angleStep - Math.PI / 2);
        return `${x},${y}`;
    }).join(" ");

    return (
        <div className="relative w-75 h-75 flex items-center justify-center">
            <svg width={size} height={size} className="overflow-visible">
                {/* Сетка (паутинка) */}
                {[0.2, 0.4, 0.6, 0.8, 1].map((step) => (
                    <polygon
                        key={step}
                        points={skills.map((_, i) => {
                            const x = center + (radius * step) * Math.cos(i * angleStep - Math.PI / 2);
                            const y = center + (radius * step) * Math.sin(i * angleStep - Math.PI / 2);
                            return `${x},${y}`;
                        }).join(" ")}
                        className="fill-none stroke-white/10 stroke-1"
                    />
                ))}

                {/* Оси */}
                {skills.map((_, i) => {
                    const x = center + radius * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + radius * Math.sin(i * angleStep - Math.PI / 2);
                    return <line key={i} x1={center} y1={center} x2={x} y2={y} className="stroke-white/10 stroke-1" />;
                })}

                {/* Сама фигура навыков */}
                <motion.polygon
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    points={points}
                    className="fill-blue-500/30 stroke-blue-500 stroke-2"
                />

                {/* Подписи */}
                {skills.map((s, i) => {
                    const x = center + (radius + 25) * Math.cos(i * angleStep - Math.PI / 2);
                    const y = center + (radius + 15) * Math.sin(i * angleStep - Math.PI / 2);
                    return (
                        <text key={i} x={x} y={y} textAnchor="middle" className="fill-gray-500 font-mono text-[10px] uppercase tracking-tighter">
                            {s.label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
}