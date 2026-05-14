export type ProjectStatus = "Active" | "Deployable" | "In dev" | "Security";

export interface ProjectData {
    id: string;      // Должен совпадать с ключом в i18n.ts
    status: ProjectStatus;
    linkKey: keyof typeof import('./links').projectLinks; // Авто-привязка к твоим ссылкам
    liveLinkKey?: keyof typeof import('./links').projectLinks; // Опциональная ссылка на Live-версию
}

export const projectsList: ProjectData[] = [
    { id: "motolog", status: "Active", linkKey: "motoLog", liveLinkKey: "motoLogLive" },
    { id: "saas-crm", status: "Deployable", linkKey: "saasCrm" },
    { id: "valentin", status: "Deployable", linkKey: "valentinBot" },
    { id: "cineplex", status: "In dev", linkKey: "cineplexApp" },
    // Чтобы добавить проект: просто добавь строку здесь и текст в i18n.ts
];
