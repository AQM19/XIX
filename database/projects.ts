import { IProject } from "@/interfaces/project-list";

export const initialData: IProject[] = [
    {
        _id: '1',
        title: [
            { lang: 'es', value: 'Autoterra' }
        ],
        description: [
            { lang: 'es', value: 'Terrario automatizado' },
        ],
        documentation: [
            {lang: 'es', value: ''}
        ],
        github: '',
        link: '',
        logo: '',
        slug: 'q_tech_autoterra',
        tag: [
            {lang: 'es', value: 'Multiplataforma'}
        ],
        available_languages: ['es'],
        category: "personal",
        dateFrom: Date,

    },
    // {
    //     _id: '2',
    //     title: 'FuckOffendiditos',
    //     description: 'Página de humor',
    //     slug: 'fuck_offendiditos',
    //     tag: ['webpage'],
    //     type: "professional",
    //     image: '/svg/github-mark-white.svg'
    // }
];