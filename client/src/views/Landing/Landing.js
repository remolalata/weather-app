import {
    Container,
    Box,
    Typography,
    Button
} from '@mui/material';

import './Landing.css';

import { HOME_DESCRIPTION, LOGIN_LABEL } from '../../utils/constants';

const Landing = () => {
    return (
        <Container 
            maxWidth='md'
            sx={{
                marginTop: '100px'
            }}
        >
            <Box className='landing_page'>
                <Typography variant='h6' component='div'>{HOME_DESCRIPTION}</Typography>
                <Button size='large' variant='contained'>{LOGIN_LABEL}</Button>
            </Box>
        </Container>
    );
};

export default Landing;