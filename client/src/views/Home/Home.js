import {
    Container,
    Box,
    Typography,
    Button
} from '@mui/material';

import User from '../../components/User/User';
import SearchBox from '../../components/SearchBox/SearchBox';

import './Home.css';

import { HOME_DESCRIPTION, LOGIN_LABEL } from '../../utils/constants';

const Landing = () => {
    return (
        <Container 
            maxWidth='md'
            sx={{
                marginTop: '50px'
            }}
        >
            <Box className='home_page'>
                <User />
                <SearchBox />
            </Box>
        </Container>
    );
};

export default Landing;