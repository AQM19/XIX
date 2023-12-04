export interface IProjecListResponse {
    projects: IProject[];
}

export interface IProject {
    _id: string;
    title: string;
    description?: string;
    image?: string;
    slug: string;
    tag: string[];
    type: IType
}

export type IType = 'personal' | 'professional' | 'job'