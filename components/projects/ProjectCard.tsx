import { IProject } from '@/interfaces/project-list';
import { Box, Card, CardActionArea, CardHeader, CardMedia, Grid, Link, CardContent, Chip, Typography, Avatar, CardActions, Button, useTheme } from '@mui/material';
import React, { FC } from 'react'
import NextLink from 'next/link';

import GithubLight from '@/public/svg/github-mark-white.svg'
import GithubDark from '@/public/svg/github-mark.svg'

interface Props {
    project: IProject;
}

export const ProjectCard: FC<Props> = ({ project }) => {

    const theme = useTheme();

    return (
        <Grid item xs={12} sm={6} md={4} xl={3} key={project.slug}>
            <Card sx={{ height: 400, display: 'flex', flexDirection: 'column' }}>

                <CardHeader
                    title={project.title}
                    subheader={'subheader'}
                    avatar={
                        <Avatar aria-label="recipe">
                            {project.title.substring(0, 1)}
                        </Avatar>
                    }
                />

                <CardActionArea>
                    <CardMedia
                        component='img'
                        height={200}
                        image={`${theme.palette.mode === 'light' ? GithubDark.src : GithubLight.src}`}
                        alt={project.description[0].value}
                    />
                </CardActionArea>

                <CardContent>
                    <Typography variant='body2' color='primary'>{project.description[0].value}</Typography>
                </CardContent>

                <Box sx={{ flex: 1 }} />

                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <NextLink href={`/projects/${project.title}`} prefetch={false} passHref legacyBehavior>
                        <Link>
                            <Button>Ver proyecto</Button>
                        </Link>
                    </NextLink>
                </CardActions>

            </Card>
        </Grid>
    )
}

