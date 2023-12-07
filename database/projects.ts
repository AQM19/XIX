import { IDeveloper, IProject } from "@/interfaces/project-list";

interface SeedData {
    projects: IProject[];
}

export const baseDevelopers: IDeveloper[] = [
    {
        name: 'Aarón',
        surname: 'Quintanal Martín',
        github: 'https://github.com/AQM19',
        portfoil: 'https://xix-seven.vercel.app/'
    }
]

export const initialData: SeedData = {
    projects: [
        {
            title:'Auto-Terra',
            description: [
                { lang: 'es', value: 'Terrario automatizado' },
            ],
            slug: 'xix_aqm_autoterra',
            tag: [
                {lang: 'es', value: 'Multiplataforma'},
                {lang: 'es', value: 'Ecosostenible'},
            ],
            available_languages: ['es'],
            category: "personal",
            dateFrom: new Date(),
            dateTo: new Date(),
            developers: [
                baseDevelopers[0]
            ],
            status: "finished",
            createdAt: '',
            updatedAt: ''
        },
        {
            title: 'Fuck Offendiditos',
            description: [
                { lang: 'es', value: 'Página de humor para contar historias sobre la generación de cristal' },
            ],
            slug: 'xix_aqm_fuckoffendiditos',
            tag: [
                {lang: 'es', value: 'Web'},
            ],
            available_languages: ['es'],
            category: "freelance",
            dateFrom: new Date(),
            developers: [
                baseDevelopers[0]
            ],
            status: "planification",
            createdAt: '',
            updatedAt: ''
        }
    ]   
};