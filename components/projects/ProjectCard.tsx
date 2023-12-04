import { IProject } from '@/interfaces/project-list';
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import NextLink from 'next/link';

interface Props {
    project: IProject;
}

export const ProjectCard: FC<Props> = ({ project }) => {

    const router = useRouter();
    const onClick = () => {
        router.push(`/name/${project.title}`)
    }

    return (
        <Grid item xs={6} sm={3} md={2} xl={1} key={project._id}>
            <Card>
                <NextLink href={`/projects/${project.slug}`} prefetch={false} passHref legacyBehavior>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                image={project.image}
                                alt={project.description}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>

            <Box sx={{ mt: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{project.title}</Typography>
            </Box>

        </Grid>
    )
}
