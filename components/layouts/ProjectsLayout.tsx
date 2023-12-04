import { Grid } from '@mui/material'
import React from 'react'
import { ProjectList } from '../projects/ProjectList';
import { initialData } from '@/database/projects';

export const ProjectsLayout = () => {
    return (
        <Grid id='Projects' container
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'100vh'}
            gap={2}
        >
            <ProjectList projects={initialData.projects} />
        </Grid >


    )
}
