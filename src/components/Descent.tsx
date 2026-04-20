"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLangStore, dict } from '../lib/i18n';

export default function Descent() {
    const { lang } = useLangStore();
    const t = dict[lang].descent;
    const [pct, setPct] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    useEffect(() => {
        if (isInView) {
            let current = 0;
            const target = 73;
            const interval = setInterval(() => {
                current += 1;
                setPct(current);
                if (current >= target) clearInterval(interval);
            }, 30);
            return () => clearInterval(interval);
        }
    }, [isInView]);

    return (
        <section ref={ref} className="relative flex flex-col items-center justify-center py-32 bg-gradient-to-b from-[#0c1118] to-black z-10">
            <motion.div animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="w-[1px] h-20 bg-gradient-to-b from-blue-500 to-green-500 mb-8 origin-top" />
            <div className="text-center font-mono relative">
                <div className="text-[10px] md:text-xs tracking-[0.3em] text-blue-400/50 mb-4">{t.crossing}</div>
                <h2 className="text-3xl md:text-5xl font-bold text-green-500 mb-4 tracking-wider animate-pulse drop-shadow-[0_0_15px_rgba(0,229,54,0.4)]">{t.title}</h2>
                <div className="text-[10px] text-green-500/40 tracking-[0.2em]">kernel.sys → hardware.drv → bare.metal</div>
            </div>
            <div className="mt-12 w-64 md:w-80 max-w-[80vw]">
                <div className="h-[1px] bg-white/10 w-full overflow-hidden relative">
                    <motion.div initial={{ width: "0%" }} animate={isInView ? { width: "100%", opacity: [1, 1, 0] } : { width: "0%" }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-green-500" />
                </div>
                <div className="flex justify-between mt-2 font-mono text-[10px] text-green-500/40 tracking-widest">
                    <span>{t.status}</span>
                    <span>{pct}%</span>
                </div>
            </div>
        </section>
    );
}