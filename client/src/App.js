import React from 'react';
import { connect } from 'react-redux';

import Header from './components/Header/Header';
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Weather from './views/Weather/Weather';

import './App.css';

const App = props => {

  console.log(props)

  return (
    <>
      <Header />
      <Landing />
    </>
  );
};

const mapStateToProps = state => ({
  common: state.common,
  user: state.user
})

export default connect(mapStateToProps, null)(App);