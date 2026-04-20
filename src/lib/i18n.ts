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
                 valentin: {
                    title: "Quest Bot & Web Landing",
                    desc: "A multilingual Telegram bot with a quest-based authentication system. It includes in-memory state storage, a content generator, and integration with a secure web landing page."
                },
                cineplex: {
                    title: "CinePlex — Co-Watching",
                    desc: "A standalone web application for collaborative video viewing. On-the-fly media transcoding, NAT traversal via tunnels, and strict player synchronization via WebSockets."
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
                valentin: {
                    title: "Quest Bot & Web Landing",
                    desc: "Мультиязычный Telegram-бот с системой авторизации через квест. Включает in-memory хранилище состояний, генератор контента и интеграцию с защищенным веб-лендингом."
                },
                cineplex: {
                    title: "CinePlex — Co-Watching",
                    desc: "Автономное веб-приложение для совместного просмотра видео. Транскодинг медиа на лету, обход NAT через туннели и жесткая синхронизация плееров по веб-сокетам."
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
                valentin: {
                    title: "Quest Bot & Web Landing",
                    desc: "Багатомовний Telegram-бот із системою авторизації через квест. Включає in-memory сховище станів, генератор контенту та інтеграцію із захищеним веб-лендінгом."
                },
                cineplex: {
                    title: "CinePlex — Co-Watching",
                    desc: "Автономний веб-застосунок для спільного перегляду відео. Транскодування медіа на льоту, обхід NAT через тунелі та жорстка синхронізація плеєрів по веб-сокетах."
                }
            }
        }
    }
};
