export interface IProject {
    description: IInternationalization[];
    documentation?: IInternationalization[];
    github?: string;
    link?: string;
    logo?: string;
    slug: string;
    available_languages: ILanguage[];
    tag: IInternationalization[];
    title: string;
    category: IProjectCategory;
    dateFrom: Date;
    dateTo?: Date;
    developers: IDeveloper[];
    status: IProjectStatus;
    createdAt: string;
    updatedAt: string;
}

export interface IDeveloper {
    name: string;
    surname: string;
    github?: string;
    linkedin?: string;
    portfoil?: string;
}

export interface IInternationalization {
    lang: ILanguage;
    value: string
}

export type ILanguage =
    | 'es'
    | 'en'

export type IProjectCategory =
    | 'production'
    | 'personal'
    | 'freelance';

export type IProjectStatus =
    | 'investigation'
    | 'planification'
    | 'designing'
    | 'developing'
    | 'launching'
    | 'maintenance'
    | 'tracking'
    | 'finished'