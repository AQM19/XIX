import NextLink from 'next/link';

import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material'

export const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>

                <NextLink href='/' legacyBehavior>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>XIX</Typography>
                        <Typography sx={{ ml: 0.5 }}>| Quintanal</Typography>
                    </Link>
                </NextLink>

                <Box flex={1}></Box>

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {/* map */}
                </Box>

            </Toolbar>
        </AppBar>
    )
}
