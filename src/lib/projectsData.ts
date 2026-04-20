export type ProjectStatus = "Active" | "Deployed" | "In process" | "Security";

export interface ProjectData {
    id: string;      // Должен совпадать с ключом в i18n.ts
    status: ProjectStatus;
    linkKey: keyof typeof import('./links').projectLinks; // Авто-привязка к твоим ссылкам
}

export const projectsList: ProjectData[] = [
    { id: "valentin", status: "Deployed", linkKey: "valentinBot" },
    { id: "cineplex", status: "Deployed", linkKey: "cineplexApp" },
    // Чтобы добавить проект: просто добавь строку здесь и текст в i18n.ts
];
