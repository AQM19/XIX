import { Grid, Card, CardContent, CardHeader, Typography, Box, Chip, Button } from '@mui/material'
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
                <Grid item xs={12} sm={6} display={'flex'} flexDirection={'column'} gap={5}>
                    <Box>
                        <Typography variant='h2' component={'h1'}>{project.title}</Typography>
                        <Typography variant='h6' component={'h2'} color={'secondary'}>Subheader</Typography>
                    </Box>

                    <Box>
                        <Typography variant='body1'>{project.description[0].value}</Typography>
                        <Box marginTop={1}>
                            {
                                project.tag.map(tag => (
                                    <Chip key={tag.value} label={tag.value} color='primary' sx={{ marginRight: 2 }} />
                                )
                                )
                            }
                        </Box>
                    </Box>

                    <Box>
                        <Button variant='outlined'>Descarga</Button>
                    </Box>

                </Grid>

                <Grid item xs={12} sm={6} display={'flex'}>
                    {/* TODO imagelist */}
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