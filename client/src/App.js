import { Box, CircularProgress } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

import Header from './components/Header/Header';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Weather from './views/Weather/Weather';

import './App.css';

const App = () => {
  const {
    isAuthenticated,
    logout,
    isLoading
  } = useAuth0();

  return (
    <>
      <Header onLogout={logout} />
      {isLoading ?
        <Box className='preloader'>
          <CircularProgress />
        </Box>
        :
        <>
          {isAuthenticated ?
            <Home />
            :
            <Landing />
          }
        </>
      }
    </>
  );
};

export default App;