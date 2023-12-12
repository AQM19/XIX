import { Box, Button, Card, Grid, Link, Typography, useTheme } from '@mui/material'
import NextLink from 'next/link';
import Image from 'next/image';
import React from 'react'

import DarkProfilePic from '@/public/images/profile_dark_theme.png'
import LightProfilePic from '@/public/images/profile_light_theme.png'

export const PresentationLayout = () => {

    const theme = useTheme();

    return (
        <Grid id='Index' container
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            minHeight={'100vh'}
        >
            <Grid item xs={12} sm={12} md={12} xl={12}
                minHeight={'calc(100vh - 15vh)'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    position: 'relative',
                    backgroundImage: `url(${theme.palette.mode === 'dark' ? DarkProfilePic.src : LightProfilePic.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundClip: 'content-box',
                    boxShadow: `0 0 150px 150px ${theme.palette.mode === 'dark' ? '#121212' : '#E0E0E0'} inset`,
                }}>

                <Box
                    padding={5}
                    borderRadius={5}
                    sx={{
                        width: { xl: '50vw', sm: '75vw', xs: '90vw' },
                        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(18,18,18,0.8)' : 'rgba(255,255,255,0.8)',
                    }}>

                    <Typography variant='h1' component={'h1'}>XIX</Typography>
                    <Typography variant='h2' component={'h2'}>Aarón Quintanal Martín</Typography>

                    <Box display={'flex'} justifyContent={'flex-start'} sx={{
                        marginTop: '2em',
                        marginBottom: '2em'
                    }}>
                        <Typography variant='body1'>
                            Soy un desarrollador multiplataforma, especializado en tecnologías como Angular y React,
                            creo soluciones versátiles y eficientes que brindan experiencias coherentes en diversos
                            dispositivos y sistemas operativos. Con un enfoque ágil y conocimientos sólidos, busco
                            superar las limitaciones de plataforma y ofrecer soluciones innovadoras que se adapten
                            a las demandas del mundo digital.
                        </Typography>
                    </Box>

                    <Box display={'flex'} justifyContent={'end'}>
                        <NextLink href={'/#Contact'} passHref legacyBehavior>
                            <Link>
                                <Button color='primary' variant='outlined'>Contacto</Button>
                            </Link>
                        </NextLink>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
