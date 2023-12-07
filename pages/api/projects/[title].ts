import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Project } from '../../../models';
import { IProject } from '../../../interfaces/project-list';

type Data =
    | { message: string }
    | IProject

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getProjectByTitle(req, res)

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

export const getProjectByTitle = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { title } = req.query;

    await db.connect();
    const project = await Project.findOne({ title: title as string }).lean();
    await db.disconnect();

    if (project) {
        return res.status(200).json(project);
    } else {
        return res.status(404).json({ message: 'Project not found' });
    }
}
