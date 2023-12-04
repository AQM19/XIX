import { IProject } from '@/interfaces/project-list'
import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { ProjectCard } from './ProjectCard';

interface Props {
    projects: IProject[];
}

export const ProjectList: FC<Props> = ({ projects }) => {
    return (
        <Grid container spacing={4}>
            {
                projects.map(project => (
                    <ProjectCard
                        key={project.slug}
                        project={project}
                    />
                ))
            }
        </Grid>
    )
}
