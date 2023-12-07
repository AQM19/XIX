import { IProject } from '@/interfaces/project-list';
import { Box, Card, CardActionArea, CardHeader, CardMedia, Grid, Link, CardContent, Chip } from '@mui/material';
import React, { FC } from 'react'
import NextLink from 'next/link';

interface Props {
    project: IProject;
}

export const ProjectCard: FC<Props> = ({ project }) => {

    return (
        <Grid item xs={6} sm={6} md={4} xl={3} key={project.slug}>
            <Card>
                <CardHeader
                    title={project.title}
                />
                <NextLink href={`/projects/${project.title}`} prefetch={false} passHref legacyBehavior>
                    <Link>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                image={'svg/github-mark-white.svg'}
                                alt={project.description[0].value}
                            />
                        </CardActionArea>
                    </Link>
                </NextLink>
                <CardContent>
                    <Box display={'flex'} gap={1}>
                        {
                            project.tag.map(tag => (
                                <Chip label={tag.value} color='primary' key={project.slug}/>
                            ))
                        }
                    </Box>
                </CardContent>
            </Card>

        </Grid>
    )
}
