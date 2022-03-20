import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Box,
    Alert
} from '@mui/material';

import User from '../../components/User/User';
import SearchBox from '../../components/SearchBox/SearchBox';

import { setWeatherDataApiCall } from '../../store/Weather/weather.apiCall';

import './Home.css';

const Home = props => {

    const { userData, common } = props;

    console.log(common)

    const [city, setCity] = useState('');

    const inputHandler = e => {
        let city = e.target.value;
        setCity(city);
    }

    const submitHandler = e => {
        e.preventDefault();
        props.setWeatherDataApiCall(city);
    }

    return (
        <Container
            maxWidth='md'
            sx={{
                marginTop: '50px'
            }}
        >
            <Box className='home_screen'>
                <User data={userData} />
                {common.error && <Alert icon={false} severity="error">{common.error}</Alert>}
                
                <SearchBox
                    onChange={inputHandler}
                    onSubmit={submitHandler}
                    value={city}
                />
            </Box>
        </Container>
    );
};

const mapStateToProps = state => ({
    userData: state.user,
    common: state.common
});

const mapDispatchToProps = dispatch => ({
    setWeatherDataApiCall: url => dispatch(setWeatherDataApiCall(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);