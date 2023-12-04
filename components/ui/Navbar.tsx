import NextLink from 'next/link';
import Image from 'next/image';

import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'

export const Navbar = () => {
    
    return (
        <AppBar position='sticky'>
            <Toolbar>

                <NextLink href='/' legacyBehavior>
                    <Link display='flex' alignItems='center' underline='none' sx={{
                        cursor: 'pointer'
                    }} >
                        <Typography variant='h6'>XIX</Typography>
                        <Typography sx={{ ml: 2 }}>Aarón Quintanal</Typography>
                    </Link>
                </NextLink>

                <Box flex={1}></Box>

                <Box sx={{ display: { xs: 'none', sm: 'flex' } }} gap={2}>

                    <NextLink href='#Index' passHref legacyBehavior>
                        <Link>
                            <Button>Inicio</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='#Projects' passHref legacyBehavior>
                        <Link>
                            <Button>Proyectos</Button>
                        </Link>
                    </NextLink>

                    <NextLink href='#Contact' passHref legacyBehavior>
                        <Link>
                            <Button>Contacto</Button>
                        </Link>
                    </NextLink>

                </Box>

                <Box flex={1}></Box>

                <Box display={'flex'} gap={3}>
                    <NextLink href='https://www.linkedin.com/in/aar%C3%B3n-quintanal-mart%C3%ADn-6116b5270/' passHref legacyBehavior>
                        <Link target='_blank' rel="noopener noreferrer">
                            <Image src={'/svg/linkedin-mark-white.svg'} alt={''} width={35} height={35} />
                        </Link>
                    </NextLink>

                    <NextLink href='https://github.com/AQM19?tab=repositories' passHref legacyBehavior>
                        <Link target='_blank' rel="noopener noreferrer">
                            <Image src={'/svg/github-mark-white.svg'} alt={''} width={35} height={35} />
                        </Link>
                    </NextLink>
                </Box>

            </Toolbar>
        </AppBar>
    )
}
