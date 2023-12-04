import { Box, Button, Card, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import React from 'react'

import ProfilePic from '@/public/images/avatar.jpg'

export const PresentationLayout = () => {
    return (
        <Grid id='Index' container
            display={'flex'}
            flexDirection={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            minHeight={'100vh'}
        >

            <Grid item xs={12} sm={5} >
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
                    <Button color='primary' variant='outlined'>Contacto</Button>
                </Box>
            </Grid>

            <Grid item xs={12} sm={5}>
                <Box borderRadius={'50%'} overflow={'hidden'}>
                    <Image
                        src={ProfilePic} alt={''}
                        sizes="100vh"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        width={600}
                        height={600}
                    />
                </Box>
            </Grid>

        </Grid>
    )
}
