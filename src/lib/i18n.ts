import { create } from 'zustand';

export type Lang = 'en' | 'ru' | 'ua';

interface LangStore {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangStore>((set) => ({
    lang: 'en',
    setLang: (lang) => set({ lang }),
}));

export const dict = {
    en: {
        nav: { source: "Source Code" },
        hero: {
            role: 'Full-Stack Web Developer & <span class="text-blue-400 font-bold">Systems Engineer</span>',
            bio: 'I build <span class="text-purple-400 font-semibold">high-performance web applications</span> and dive deep into the hardware beneath them.',
            btn: "Descend to Systems"
        },
        radar: {
            frontend: "Frontend",
            backend: "Backend",
            systems: "Systems",
            security: "Security",
            hardware: "Hardware"
        },
        terminal: {
            welcome: "Type 'help' to see available commands...",
            unknown: "Command not found. Type 'help' for assistance.",
            help: "Available: help, whoami, ls projects, status, motor, clear"
        },
        descent: {
            crossing: "// CROSSING ABSTRACTION BOUNDARY",
            title: "INITIATING DESCENT",
            status: "LOADING SYSTEM LAYER"
        },
        projects: {
            badge: "Selected Work",
            title: "Latest Deployments",
            items: {
                bot: {
                    title: "Interactive Quest Bot",
                    desc: "Personalized Telegram bot with automated quiz mechanics and custom web-hooks."
                },
                server: {
                    title: "ARM Home Server",
                    desc: "Full-scale Alpine Linux server hosted on a repurposed Lenovo device for automation."
                },
                multitool: {
                    title: "Persistence SSD Toolkit",
                    desc: "Custom security toolkit with live-environments and persistence for penetration testing."
                }
            }
        }
    },
    ru: {
        nav: { source: "Исходный код" },
        hero: {
            role: 'Full-Stack Веб-Разработчик и <span class="text-blue-400 font-bold">Системный Инженер</span>',
            bio: 'Я создаю <span class="text-purple-400 font-semibold">высоконагруженные веб-приложения</span> и глубоко погружаюсь в железо под ними.',
            btn: "Спуститься к системам"
        },
        radar: {
            frontend: "Фронтенд",
            backend: "Бэкенд",
            systems: "Системы",
            security: "Безопасность",
            hardware: "Железо"
        },
        terminal: {
            welcome: "Введите 'help' для списка команд...",
            unknown: "Команда не найдена. Введите 'help' для справки.",
            help: "Доступно: help, whoami, ls projects, status, motor, clear"
        },
        descent: {
            crossing: "// ПЕРЕСЕЧЕНИЕ ГРАНИЦЫ АБСТРАКЦИИ",
            title: "ИНИЦИАЦИЯ СПУСКА",
            status: "ЗАГРУЗКА СИСТЕМНОГО УРОВНЯ"
        },
        projects: {
            badge: "Мои Работы",
            title: "Последние Проекты",
            items: {
                bot: {
                    title: "Интерактивный Квест-Бот",
                    desc: "Персонализированный Telegram-бот с автоматикой викторин и веб-хуками."
                },
                server: {
                    title: "ARM Домашний Сервер",
                    desc: "Полноценный сервер на Alpine Linux, развернутый на смартфоне Lenovo A5000."
                },
                multitool: {
                    title: "IT Мультитул (SSD)",
                    desc: "Переносной SSD с набором Live-систем и режимом persistence для пентеста."
                }
            }
        }
    },
    ua: {
        nav: { source: "Вихідний код" },
        hero: {
            role: 'Full-Stack Веб-Розробник та <span class="text-blue-400 font-bold">Системний Інженер</span>',
            bio: 'Я створюю <span class="text-purple-400 font-semibold">високонавантажені веб-застосунки</span> та глибоко занурююсь у залізо під ними.',
            btn: "Зануритись у системи"
        },
        radar: {
            frontend: "Фронтенд",
            backend: "Бекенд",
            systems: "Системи",
            security: "Безпека",
            hardware: "Залізо"
        },
        terminal: {
            welcome: "Введіть 'help' для списку команд...",
            unknown: "Команду не знайдено. Введіть 'help' для довідки.",
            help: "Доступно: help, whoami, ls projects, status, motor, clear"
        },
        descent: {
            crossing: "// ПЕРЕТИН МЕЖІ АБСТРАКЦІЇ",
            title: "ІНІЦІАЦІЯ СПУСКУ",
            status: "ЗАВАНТАЖЕННЯ СИСТЕМНОГО РІВНЯ"
        },
        projects: {
            badge: "Мої Роботи",
            title: "Останні Проекти",
            items: {
                bot: {
                    title: "Інтерактивний Квест-Бот",
                    desc: "Персоналізований Telegram-бот з автоматикою вікторин та веб-хуками."
                },
                server: {
                    title: "ARM Домашній Сервер",
                    desc: "Повноцінний сервер на Alpine Linux, розгорнутий на смартфоні Lenovo A5000."
                },
                multitool: {
                    title: "IT Мультитул (SSD)",
                    desc: "Переносний SSD з набором Live-систем та режимом persistence для пентесту."
                }
            }
        }
    }
};