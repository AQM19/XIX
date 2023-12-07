import { Grid, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { FC } from 'react'
import { XIXLayout } from '@/components/layouts';
import { IProject } from '@/interfaces';
import { GetServerSideProps } from 'next';
import { projectsApi } from '@/apis';

interface Props {
    project: IProject;
}

const ProjectPageByTitle: FC<Props> = ({ project }) => {



    return (
        <XIXLayout title={project.title} pageDescription={project.description[0].value}>

            <Grid container>
                <Grid item xs={12} sm={12} display={'flex'} flexDirection={'column'}>
                    <Typography variant='h1' component={'h1'}>{project.title}</Typography>

                    <Typography variant='body1' component={'body'}>{project.description[0].value}</Typography>
                </Grid>
            </Grid>

        </XIXLayout>
    )
}

export default ProjectPageByTitle;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    try {
        const { title } = params as { title: string };
        const response = await projectsApi.get(`/projects/${title}`);
        const projectData = response.data;

        // Elimina las cabeceras del objeto antes de devolverlo
        delete projectData.headers;

        return {
            props: {
                project: projectData
            }
        };
    } catch (error) {
        // Maneja errores según sea necesario
        console.error("Error fetching project data:", error);

        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        };
    }
}