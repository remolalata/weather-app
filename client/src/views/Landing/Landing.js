import {
    Container,
    Box,
    Typography,
    Button
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import './Landing.css';

import { HOME_DESCRIPTION, LOGIN_LABEL } from '../../utils/constants';

const Landing = () => {
    const {
        loginWithRedirect
    } = useAuth0();

    return (
        <Container
            maxWidth='md'
            sx={{
                marginTop: '100px'
            }}
        >
            <Box className='landing_page'>
                <Typography variant='h6' component='div'>{HOME_DESCRIPTION}</Typography>
                <Button size='large' variant='contained' onClick={loginWithRedirect}>{LOGIN_LABEL}</Button>
            </Box>
        </Container>
    );
};

export default Landing;