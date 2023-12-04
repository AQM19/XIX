import { IProjecListResponse, IProject } from "@/interfaces/project-list";

export const initialData: IProjecListResponse = {
    projects: [
        {
            _id: '1',
            title: 'AutoTerra',
            description: 'Terrario automatizado',
            slug: 'q_tech_autoterra',
            tag: ['multiplataforma'],
            type: "personal",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '2',
            title: 'FuckOffendiditos',
            description: 'Página de humor',
            slug: 'fuck_offendiditos',
            tag: ['webpage'],
            type: "professional",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '3',
            title: 'CodeBot',
            description: 'Generador automático de código',
            slug: 'code_bot',
            tag: ['development', 'automation'],
            type: "personal",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '4',
            title: 'EcoWatch',
            description: 'Aplicación para monitoreo ambiental',
            slug: 'eco_watch',
            tag: ['mobile', 'environment'],
            type: "professional",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '5',
            title: 'HealthTrack',
            description: 'Plataforma de seguimiento de salud',
            slug: 'health_track',
            tag: ['webpage', 'healthcare'],
            type: "personal",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '6',
            title: 'SmartHomeHub',
            description: 'Centro de control para hogar inteligente',
            slug: 'smart_home_hub',
            tag: ['iot', 'home-automation'],
            type: "professional",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '7',
            title: 'LearnEasy',
            description: 'Plataforma educativa interactiva',
            slug: 'learn_easy',
            tag: ['education', 'e-learning'],
            type: "personal",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '8',
            title: 'MarketInsights',
            description: 'Análisis de mercado en tiempo real',
            slug: 'market_insights',
            tag: ['analytics', 'business'],
            type: "professional",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '9',
            title: 'FitBuddy',
            description: 'App de entrenamiento personalizado',
            slug: 'fit_buddy',
            tag: ['mobile', 'fitness'],
            type: "personal",
            image: '/svg/github-mark-white.svg'
        },
        {
            _id: '10',
            title: 'GreenGarden',
            description: 'Gestión de jardines sostenibles',
            slug: 'green_garden',
            tag: ['webpage', 'sustainability'],
            type: "professional",
            image: '/svg/github-mark-white.svg'
        }
    ]
}