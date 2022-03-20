import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Box
} from '@mui/material';

import User from '../../components/User/User';
import SearchBox from '../../components/SearchBox/SearchBox';

import './Home.css';

const Home = props => {

    const { userData } = props;

    return (
        <Container
            maxWidth='md'
            sx={{
                marginTop: '50px'
            }}
        >
            <Box className='home_page'>
                <User data={userData} />
                <SearchBox />
            </Box>
        </Container>
    );
};

const mapStateToProps = state => ({
    userData: state.user
});

export default connect(mapStateToProps, null)(Home);