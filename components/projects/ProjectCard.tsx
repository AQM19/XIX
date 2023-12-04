import { IProject } from '@/interfaces/project-list';
import { Box, Card, CardActionArea, CardHeader, CardMedia, Grid, Link, Typography, CardContent, Chip } from '@mui/material';
import { useRouter } from 'next/router';
import React, { FC } from 'react'
import NextLink from 'next/link';

interface Props {
    project: IProject;
}

export const ProjectCard: FC<Props> = ({ project }) => {

    return (
        <Grid item xs={6} sm={6} md={4} xl={3} key={project._id}>
            <Card>
                <CardHeader
                    title={project.title}
                />
                <NextLink href={`/projects/${project.title}`} prefetch={false} passHref legacyBehavior>
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
                <CardContent>
                    <Box display={'flex'} gap={1}>
                        {
                            project.tag.map(tag => (
                                <Chip label={tag} color='primary'/>
                            ))
                        }
                    </Box>
                </CardContent>
            </Card>

        </Grid>
    )
}
