"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Server, Cpu } from 'lucide-react';
import { useLangStore, dict } from '../lib/i18n';

// 1. Описываем типы данных
type HistoryItem = {
    type: 'cmd' | 'res';
    text: string | React.ReactNode;
};

// Звук гуся в формате Base64 (предоставлен пользователем)
const HONK_SOUND = "data:audio/mp3;base64,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Ipkw5u2qqvv//IE8/aIUV7kDBK2mgABgEQmEeIqBUSnSO0rWkWNCEsSCrp4NVgqdPBqIiqpKSwVlSripY8RKnQ6WDolDRYSgqEj2JQVO63U6waLA0eiIO/LHolBWIn31HuJQeCJmZmbi5Va+F/2ZpZmv/2ZmZpX9jm//ycgqEJh/6hCiF/Jmicwr/w/oBBT/+Kb/iv////uSRIwD8mgPwilhGHJKQ7hAHCJOSagG/QSEYAE3np7AgItZmhBIKaK6N+K7/N/8fmhBOJoKaFBRVjEFN6C1TEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==";

// Компонент пасхалки
function GooseEasterEgg({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const playHonk = (delay: number) => {
            const audio = new Audio(HONK_SOUND);
            audio.volume = 0.6;
            const t = setTimeout(() => {
                audio.play().catch(e => console.warn("Honk failed:", e));
            }, delay * 1000);
            return t;
        };

        // Расставляем гудки более вальяжно
        const t1 = playHonk(0);
        const t2 = playHonk(0.6);
        const t3 = playHonk(1.2);
        
        const timer = setTimeout(onComplete, 4000);
        return () => {
            if (t1) clearTimeout(t1);
            if (t2) clearTimeout(t2);
            if (t3) clearTimeout(t3);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ x: '120vw' }}
            animate={{ x: '-120vw' }}
            transition={{ duration: 4, ease: "linear" }}
            className="fixed top-1/2 left-0 w-full z-[999] -translate-y-1/2 pointer-events-none select-none flex items-center justify-center"
        >
            <motion.div 
                animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, -15, 15, 0]
                }}
                transition={{ duration: 0.3, repeat: 13 }}
                className="text-[12rem] md:text-[20rem]"
            >
                🪿
            </motion.div>
        </motion.div>
    );
}

export default function Terminal() {
    const [activeTab, setActiveTab] = useState('interactive');
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [showGoose, setShowGoose] = useState(false);

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const { lang } = useLangStore();
    const t = dict[lang].terminal;

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const rawInput = input.trim();
            if (!rawInput) return;

            const [baseCmd, ...args] = rawInput.toLowerCase().split(/\s+/);
            const stringArgs = rawInput.substring(baseCmd.length).trim().toLowerCase();

            let response: string | React.ReactNode = "";

            switch (baseCmd) {
                case 'goose':
                    setShowGoose(true);
                    response = "HONK! HONK! HONK!";
                    break;
                case 'help':
                    response = "whoami, nano, ls, sudo, status, pwd, motor, fastfetch, goose, clear";
                    break;
                case 'whoami':
                    response = "shadxwfxry";
                    break;
                case 'ls':
                    response = "readme.md";
                    break;
                case 'pwd':
                    response = "/portfolio/user/shadxwfxry";
                    break;
                case 'status':
                    response = "All systems operational. Uptime: 99.9%. Kernel: Active.";
                    break;
                case 'motor':
                    response = "Night Fury (Voge 500R) - Status: Primed for next acceleration.";
                    break;
                case 'nano':
                    if (stringArgs === 'readme.md') {
                        response = "It isn't a real console, bro";
                    } else if (stringArgs === "") {
                        response = "nano: missing filename";
                    } else {
                        response = `nano: ${stringArgs}: No such file or directory`;
                    }
                    break;
                case 'sudo':
                    if (stringArgs === 'rm -rf /') {
                        response = "Seriously?";
                    } else {
                        response = "Nice idea, but NO.";
                    }
                    break;
                case 'fastfetch': {
                    const rawArt = `
...................................:=+***#######***+=-...................................
.............................-*###########################*-.............................
.........................*#####################################*.........................
.....................-*#############*+=:....-*####################*-.....................
...................############*=.........+###########################...................
................=#########*-............+############=.*################=................
..............+#########=.............=##############+..:#################+..............
............+#########*..............=#####*.+########....=##+.=############+............
...........#########*................########......:=**.....=#...+############:..........
.........+########*..................#-................=......+:..*############*.........
........#########:...................:..................--.......:*#:*###########........
......:########+.....................................*===+*...........+**#########-......
.....:########=......................................--..................*#########:.....
....-########=........................................:+..................-=########-....
....#########=.................................=*#########+.................#########....
...*#########.................................*########:..............+#:...+########*...
..+#########+.................................*##########*===..........=+....*########*..
..##########...........:=*#=..........:##-.....-##############+...............#########..
.=#########=.........=#*.............+####=........*##############*-.........:#########+.
.*#########=........*##.............*##########+-...=##################+...:*###########.
:##########=....+..###=............*#########*=........=*###############################:
=##########-...+#####*.............*######=...........=**+-..-+#########################=
*##########=..+######..............*####=..........-#............=######################*
###########*..#######+#:...........*###...........=+................*####################
############.=#########-...........-##:.......+###-..................*###################
*###########.##########+.............*+.....*####.....................##################*
=#######################...............-**+**=:............:=**+=++:..=#################+
:#######################..................................*#+.......*..*################:
.*######################==#-............................-####:.......+:*################.
.=##########################*..........................:+*####........+################+.
..################@@@#########+.......................:*######.........*###############..
..*###############+@@@@@@@######+.................=*#########=.........###############*..
...*###############@@@@@@@@#######+.*##*=:......*###########*.........=##############*...
....################@@@@@@@@@@@#############################..........###############....
....-######*+**######@@@@@@@@@@@###########################..........###############-....
.....:######+........*#@@@@#@@@@@@@######################*..........*##############:.....
.....:#######+........+*=+*@@@@@@@@*##################+..........-###############-......
........########*.......=#=..@**@@@@@+##############*:...........################........
.........+######=..........:*-.....-*##########*=.............:*###############*.........
..........:#########+:........=+........*...................+#################:..........
............+##########:.........+#*....+..............:*###################+............
..............+##########################+=======+*#######################+..............
................=#######################################################+................
...................###################################################:..................
.....................-*###########################################*-.....................
.........................*#####################################*.........................
.............................-*###########################*=.............................
...................................-+***#########***+-...................................
`.replace(/\./g, ' ').replace(/@/g, '<span class="text-red-500">=</span>');

                    response = (
                        <div className="flex flex-col md:flex-row gap-4 py-2 items-start">
                            <div className="relative shrink-0 w-55 h-52.5 md:w-70 md:h-65">
                                <pre
                                    className="absolute top-0 left-0 m-0 p-0"
                                    style={{
                                        fontFamily: '"Courier New", Courier, monospace',
                                        fontSize: '12px',
                                        lineHeight: '12px',
                                        letterSpacing: '0px',
                                        transform: 'scale(0.35)',
                                        transformOrigin: 'top left'
                                    }}
                                    dangerouslySetInnerHTML={{ __html: rawArt }}
                                />
                                <style>{`
                                    @media (min-width: 768px) {
                                        pre { transform: scale(0.45) !important; }
                                    }
                                `}</style>
                            </div>
                            <div className="text-sm pt-2">
                                <div className="text-green-400 font-bold">root@shadxwfxry</div>
                                <div className="text-gray-500">-----------------</div>
                                <div><span className="text-green-500">OS:</span> shadxwfxry GNU/Linux</div>
                                <div><span className="text-green-500">Host:</span> Lenovo A5000 (Home Server)</div>
                                <div><span className="text-green-500">Kernel:</span> 5.15.0-v7l+</div>
                                <div><span className="text-green-500">Uptime:</span> loading...</div>
                                <div><span className="text-green-500">Shell:</span> bash 5.2</div>
                                <div><span className="text-green-500">CPU:</span> ARM Cortex-A7 (4) @ 1.3GHz</div>
                                <div><span className="text-green-500">RAM:</span> ⟳ MiB / 1024MiB</div>
                                <div className="flex gap-2 mt-2">
                                    <div className="w-3 h-3 bg-red-500"></div>
                                    <div className="w-3 h-3 bg-green-500"></div>
                                    <div className="w-3 h-3 bg-yellow-500"></div>
                                    <div className="w-3 h-3 bg-blue-500"></div>
                                    <div className="w-3 h-3 bg-purple-500"></div>
                                </div>
                            </div>
                        </div>
                    );
                    break;
                }
                case 'clear':
                    setHistory([]);
                    setInput('');
                    return;
                default:
                    response = t.unknown;
            }

            setHistory([...history, { type: 'cmd', text: `root@shadxwfxry:~# ${rawInput}` }, { type: 'res', text: response }]);
            setInput('');
        }
    };

    const tabs = {
        interactive: {
            name: "interactive.sh",
            icon: <TerminalIcon size={14} />,
            color: "text-green-500",
            content: (
                <div
                    ref={scrollRef}
                    className="flex flex-col gap-1 overflow-y-auto h-full pr-2 cursor-text"
                    onClick={() => inputRef.current?.focus()}
                >
                    <span className="text-gray-500">{t.welcome}</span>
                    {history.map((line, i) => (
                        <div key={i} className={line.type === 'cmd' ? "text-green-400" : "text-gray-300"}>
                            {line.text}
                        </div>
                    ))}
                    <div className="flex gap-2">
                        <span className="text-green-500 whitespace-nowrap">root@shadxwfxry:~#</span>
                        <input
                            ref={inputRef}
                            className="bg-transparent border-none outline-none flex-1 text-gray-300 p-0 m-0"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleCommand}
                        />
                    </div>
                </div>
            )
        },
        deploy: {
            name: "server_init.sh",
            icon: <Server size={14} />,
            color: "text-blue-400",
            content: (
                <div className="overflow-y-auto h-full pr-2">
                    <span className="text-gray-500">#!/bin/bash</span><br />
                    <span className="text-green-500">echo</span> <span className="text-amber-300">{"\"shadxwfxry GNU/Linux...\""}</span><br />
                    <span className="text-green-500">systemctl</span> start watchdog.service<br />
                    <span className="text-blue-400">[ OK ]</span> Lenovo A5000 (Home Server) online.
                </div>
            )
        },
        monitor: {
            name: "monitor.sh",
            icon: <Cpu size={14} />,
            color: "text-green-400",
            content: (
                <div className="overflow-y-auto h-full pr-2">
                    <span className="text-gray-500">#!/bin/bash</span><br />
                    <span className="text-purple-400">THRESHOLD</span>=85<br />
                    <span className="text-green-500">echo</span> <span className="text-amber-300">{"\"[SYSTEM] Analyzing storage...\""}</span>
                </div>
            )
        }
    };

    return (
        <section id="terminal-section" className="relative z-10 w-full bg-black py-24 border-t border-white/5">
            <AnimatePresence>
                {showGoose && <GooseEasterEgg onComplete={() => setShowGoose(false)} />}
            </AnimatePresence>
            <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="mb-12">
                    <div className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-green-500 uppercase mb-2">
                        <div className="w-4 h-px bg-green-500"></div>
                        Under The Hood
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
                        <TerminalIcon className="text-green-500" /> Systems & Architecture
                    </h2>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0c1118]/80 backdrop-blur-md overflow-hidden shadow-[0_0_30px_rgba(0,229,54,0.05)]">
                    <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">root@shadxwfxry:~</span>
                        </div>
                    </div>

                    <div className="flex border-b border-white/5 bg-black/20 overflow-x-auto no-scrollbar">
                        {Object.entries(tabs).map(([key, tab]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center gap-2 px-6 py-3 text-xs font-mono transition-all border-b-2 whitespace-nowrap ${activeTab === key
                                    ? `border-green-500 text-white bg-white/5`
                                    : `border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5`
                                    }`}
                            >
                                <span className={tab.color}>{tab.icon}</span>
                                {tab.name}
                            </button>
                        ))}
                    </div>

                    <div className="p-6 font-mono text-sm leading-relaxed h-105 overflow-hidden">
                        {tabs[activeTab as keyof typeof tabs].content}
                    </div>
                </div>
            </div>
        </section>
    );
}
