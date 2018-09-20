import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import reduxThunk from 'redux-thunk';

import Router from './src/Routes'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class App extends Component {

  render() {
    return(
      <Provider  store = {createStore(reducers, {}, applyMiddleware(reduxThunk))} >
        <Router/>
      </Provider>

    )
  }
}