import { Box, Button, FormControl, Grid, Input, InputLabel, TextField, Typography } from "@mui/material"

export const ContactLayout = () => {

    const sendEmailForm = () => {
        console.log('Email enviado');
    }

    return (
        <Grid id='Contact' container
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={'100vh'}
        >

            <Grid item xs={12} sm={12} md={6} xl={5}
                display={'flex'}
                flexDirection={'column'}
                gap={5}
            >
                <Box
                    display={'flex'}
                    justifyContent={'center'}
                >
                    <Typography variant="h2" component={'h1'}>Contacto</Typography>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    gap={2}
                >
                    <FormControl fullWidth>
                        <InputLabel htmlFor='nameInp' required>Nombre</InputLabel>
                        <Input id="nameInp" aria-describedby="helperNameInp" />
                        {/* <FormHelperText id='helperNameInp'>Escribe tu nombre</FormHelperText> */}
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel htmlFor='surnameInp'>Apellidos</InputLabel>
                        <Input id="surnameInp" aria-describedby="helperSurnameInp" />
                        {/* <FormHelperText id='helperSurnameInp'>Escribe tus apellidos</FormHelperText> */}
                    </FormControl>
                </Box>

                <FormControl fullWidth>
                    <InputLabel htmlFor='emailInp' required>Correo</InputLabel>
                    <Input id="emailInp" aria-describedby="helperEmailInp" />
                    {/* <FormHelperText id='helperEmailInp'>Escribe tu email</FormHelperText> */}
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel htmlFor='subjectInp' required>Asunto</InputLabel>
                    <Input id="subjectInp" aria-describedby="helperSubjectInp" />
                    {/* <FormHelperText id='helperSubjectInp'>Escribe el sunto</FormHelperText> */}
                </FormControl>

                <TextField id="messageInp" label='Mensaje' multiline rows={5} fullWidth required />

                <Box display={'flex'} justifyContent={'start'}>
                    <Button color='primary' variant='outlined' onClick={sendEmailForm}>Enviar</Button>
                </Box>

            </Grid>

        </Grid>
    )
}
