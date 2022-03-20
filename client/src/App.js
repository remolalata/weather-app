import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, CircularProgress } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import Header from './components/Header/Header';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Weather from './views/Weather/Weather';

import { setLoading } from './store/Common/common.action';
import { setUserData } from './store/Auth/auth.action';

import { validateObj } from './utils/utils';

import './App.css';

const App = props => {

  const { common, userData, weather } = props;
  const {
    isAuthenticated,
    logout,
    isLoading,
    user
  } = useAuth0();

  useEffect(() => {
    props.setLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (isAuthenticated) {
      props.setUserData(user);
    } else {
      props.setUserData({});
    }
  }, [isAuthenticated]);

  return (
    <>
      <Header onLogout={logout} userData={userData} />
      {common.loading ?
        <Box className='preloader'>
          <CircularProgress />
        </Box>
        :
        <>
          {validateObj(userData) ?
            <>
              {validateObj(weather) ?
                <Weather />
                :
                <Home />
              }
            </>
            :
            <Landing />
          }
        </>
      }
    </>
  );
};

const mapStateToProps = state => ({
  common: state.common,
  userData: state.user,
  weather: state.weather
});

const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(setLoading(data)),
  setUserData: data => dispatch(setUserData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);