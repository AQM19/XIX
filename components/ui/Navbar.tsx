import NextLink from 'next/link';
import Image from 'next/image';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Cookies from 'js-cookie';

import { AppBar, Box, Button, FormControl, IconButton, InputLabel, Link, MenuItem, Select, SelectChangeEvent, Switch, Theme, Toolbar, Typography, styled } from '@mui/material'
import { ChangeEvent, FC, useContext, useState } from 'react';
import { UIContext } from '@/context/ui';
import { darkTheme, lightTheme } from '@/themes';

export const Navbar = () => {

    const { toggleSideMenu } = useContext(UIContext);

    const [currentTheme, setCurrentTheme] = useState(darkTheme);
    const [getThemne, setTheme] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        const selectedTheme = event.target.value;
        setTheme(event.target.value as string);

        console.log(currentTheme);

        setCurrentTheme(selectedTheme === 'lightTheme' ?
            lightTheme :
            darkTheme);
    };

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
                    <Link display='flex' alignItems='center' underline='none' sx={{
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
                            <Image src={'/svg/linkedin-mark-white.svg'} alt={''} width={35} height={35} />
                        </Link>
                    </NextLink>

                    <NextLink href='https://github.com/AQM19?tab=repositories' passHref legacyBehavior>
                        <Link target='_blank' rel="noopener noreferrer">
                            <Image src={'/svg/github-mark-white.svg'} alt={''} width={35} height={35} />
                        </Link>
                    </NextLink>
                </Box>

                <Box flex={0.1}></Box>

                {/* <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={getThemne}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={'lightTheme'}>Light</MenuItem>
                        <MenuItem value={'darkTheme'}>Dark</MenuItem>
                    </Select>
                </FormControl> */}

            </Toolbar>
        </AppBar>
    )
}
