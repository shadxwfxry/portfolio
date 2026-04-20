"use client";

import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Server, Shield, Cpu } from 'lucide-react';
import { useLangStore, dict } from '../lib/i18n';

export default function Terminal() {
    const [activeTab, setActiveTab] = useState('interactive');
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<any[]>([]);
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
            const cmd = input.toLowerCase().trim();
            let response: any = "";

            switch (cmd) {
                case 'help': response = "whoami, nano, ls, sudo, status, pwd, fastfetch"; break;
                case 'whoami': response = "shadxwfxry"; break;
                case 'nano readme.md': response = "It's isn't real console, bro"; break;
                case 'ls': response = "readme.md"; break;
                case 'sudo': response = "Nice idea, but NO."; break;
                case 'sudo rm -rf /': response = "Seriously?"; break;
                case 'status': response = "All systems operational. Uptime: 99.9%. Kernel: Active."; break;
                case 'pwd': response = "/portfolio/user/shadxwfxry"; break;
                case 'fastfetch':
                    let rawArt = `
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
......:#######+........+*=+*@@@@@@@@*##################+..........-###############-......
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
`;

                    let coloredArt = rawArt
                        .replace(/\./g, ' ')
                        .replace(/@/g, '<span class="text-red-500">=</span>');

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
                                    dangerouslySetInnerHTML={{ __html: coloredArt }}
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
                                <div><span className="text-green-500">Uptime:</span> loading... ↻</div>
                                <div><span className="text-green-500">Shell:</span> bash 5.2</div>
                                <div><span className="text-green-500">CPU:</span> ARM Cortex-A7 (4) @ 1.3GHz</div>
                                <div><span className="text-green-500">RAM:</span> 482MiB / 1024MiB</div>
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
                case 'clear': setHistory([]); setInput(''); return;
                default: response = t.unknown;
            }

            setHistory([...history, { type: 'cmd', text: `root@shadxwfxry:~# ${input}` }, { type: 'res', text: response }]);
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
                    onClick={() => inputRef.current?.focus()} /* <-- Клик по всему окну фокусирует ввод */
                >
                    <span className="text-gray-500">{t.welcome}</span>
                    {history.map((line, i) => (
                        <div key={i} className={line.type === 'cmd' ? "text-green-400" : "text-gray-300"}>
                            {line.text}
                        </div>
                    ))}
                    <div className="flex gap-2">
                        <span className="text-green-500 whitespace-nowrap">root@night-fury:~#</span>
                        <input
                            ref={inputRef} /* <-- Привязали инпут */
                            /* autoFocus удален! */
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
                    <span className="text-gray-500"># Initialization script for ARM home server</span><br /><br />
                    <span className="text-green-500">echo</span> <span className="text-amber-300">{"\"shadxwfxry GNU/Linux...\""}</span><br />
                    <span className="text-green-500">systemctl</span> start watchdog.service<br />
                    <span className="text-green-500">node</span> /var/www/telegram-bot/app.js &amp;<br />
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
                    <span className="text-purple-400">THRESHOLD</span>=85<br /><br />
                    <span className="text-green-500">df</span> -H | <span className="text-purple-400">while read</span> output;<br />
                    <span className="text-purple-400">do</span><br />
                    &nbsp;&nbsp;<span className="text-green-500">echo</span> <span className="text-amber-300">{"\"[SYSTEM] Analyzing storage...\""}</span><br />
                    <span className="text-purple-400">done</span>
                </div>
            )
        }
    };

    return (
        <section id="terminal-section" className="relative z-10 w-full bg-black py-24 border-t border-white/5">
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