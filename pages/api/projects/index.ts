import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Project } from '../../../models';
import { IProject } from '../../../interfaces/project-list';

type Data =
    | { message: string }
    | IProject[]

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':
            return getProducts(req, res)

        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    await db.connect();
    const products = await Project.find()
       // .select('title description documentation inStock slug -_id')
        .lean();
    await db.disconnect();

    return res.status(200).json(products)
}
