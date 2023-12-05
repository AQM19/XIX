export interface IProject {
    _id: string;
    description: IInternationalization<string>[];
    documentation: IInternationalization<string>[];
    github?: string;
    link?: string;
    logo: string;
    slug: string;
    available_languages: ILanguage[];
    tag: IInternationalization<string>[];
    title: IInternationalization<string>[];
    category: IProjectCategory;
    dateFrom: Date;
    dateTo?: Date;
    developers: IDeveloper[];
    status: IProjectStatus;
}

export interface IDeveloper {
    _id: string;
    name: string;
    surname: string;
    github?: string;
    portfoil?: string;
}

export interface IInternationalization<T> {
    lang: ILanguage;
    value: T;
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