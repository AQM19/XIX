import NextLink from 'next/link';
import Image from 'next/image';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography, useTheme } from '@mui/material'
import { useContext } from 'react';
import { UIContext } from '@/context/ui';

import GithubLight from '@/public/svg/github-mark-white.svg'
import GithubDark from '@/public/svg/github-mark.svg'
import LinkedInLight from '@/public/svg/linkedin-mark-white.svg'
import LinkedInDark from '@/public/svg/linkedin-mark.svg'

export const Navbar = () => {

    const { toggleSideMenu } = useContext(UIContext);
    const theme = useTheme();

    return (
        <AppBar position='sticky'>
            <Toolbar>

                <IconButton
                    size='large'
                    edge='start'
                    onClick={toggleSideMenu}
                >
                    <MenuOutlinedIcon />
                </IconButton>

                <Box flex={0.1}></Box>

                <NextLink href='/' legacyBehavior>
                    <Link display='flex' alignItems='center' underline='none' color={'primary'} sx={{
                        cursor: 'pointer'
                    }} >
                        <Typography variant='h6'>XIX</Typography>
                        <Typography sx={{ ml: 2 }}>Aarón Quintanal</Typography>
                    </Link>
                </NextLink>

                <Box flex={1}></Box>

                <Box sx={{ display: { xs: 'none', sm: 'flex' } }} gap={2}>

                    <NextLink href='/#Index' passHref legacyBehavior>
                        <Link>
                            <Button>Inicio</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/#Projects' passHref legacyBehavior>
                        <Link>
                            <Button>Proyectos</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='/#Contact' passHref legacyBehavior>
                        <Link>
                            <Button>Contacto</Button>
                        </Link>
                    </NextLink>

                </Box>

                <Box flex={1}></Box>

                <Box display={'flex'} gap={3}>
                    <NextLink href='https://www.linkedin.com/in/aar%C3%B3n-quintanal-mart%C3%ADn-6116b5270/' passHref legacyBehavior>
                        <Link target='_blank' rel="noopener noreferrer">
                            <Image src={`${theme.palette.mode === 'light' ? LinkedInDark.src : LinkedInLight.src}`} alt={''} width={35} height={35} />
                        </Link>
                    </NextLink>

                    <NextLink href='https://github.com/AQM19?tab=repositories' passHref legacyBehavior>
                        <Link target='_blank' rel="noopener noreferrer">
                            <Image src={`${theme.palette.mode === 'light' ? GithubDark.src : GithubLight.src}`} alt={''} width={35} height={35} />
                        </Link>
                    </NextLink>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
