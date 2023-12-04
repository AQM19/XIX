import { XIXLayout } from '@/components/layouts';
import { IProject } from '@/interfaces/project-list';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import { GetStaticPaths, NextPage } from 'next'
import React from 'react'

interface Props {
    project: IProject;
}

const ProjectByIdPage: NextPage<Props> = ({ project }) => {
    return (
        <XIXLayout title={project.title} pageDescription={project.description}>
            <Grid container
                sx={{ marginTop: 5 }}
                gap={2}
            >
                <Grid xs={12} sm={4}>
                    <CardActionArea>
                        <CardMedia
                            component='img'
                            image={project.image}
                            alt={project.description}
                        />
                    </CardActionArea>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <CardHeader sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Typography variant='h1' textTransform={'capitalize'}>{project.title}</Typography>
                        </CardHeader>
                        <CardContent>
                            <Typography variant='body1'>{project.description}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </XIXLayout>
    )
}

export default ProjectByIdPage