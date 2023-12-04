import { IProjecListResponse, IProject } from "@/interfaces/project-list";

export const initialData: IProjecListResponse = {
    projects: [
        {
            _id: '1',
            title: 'AutoTerra',
            description: 'Terrario automatizado',
            slug: 'q_tech_autoterra',
            tag: ['multiplataforma'],
            type: "personal"
        },
        {
            _id: '2',
            title: 'FuckOffendiditos',
            description: 'Página de humor',
            slug: 'fuck_offendiditos',
            tag: ['webpage'],
            type: "professional"
        }
    ]
}