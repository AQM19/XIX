// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seedDatabase } from '../../database'
import { Project } from '../../models';
import Developer from '@/models/Dveloper';

type Data = { message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({ message: 'No tiene acceso a este API.' })
    }

    await db.connect();

    await Project.deleteMany();
    await Project.insertMany(seedDatabase.initialData.projects);

    await Developer.deleteMany();
    await Developer.insertMany(seedDatabase.baseDevelopers);

    await db.disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente.' })
}
