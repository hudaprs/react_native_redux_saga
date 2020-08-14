/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// Navigations
import RootStackNavigation from '@navigations/RootStackNavigation'

// Redux
import { Provider } from 'react-redux'
import store from '@redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <RootStackNavigation />
    </Provider>
  );
};

export default App;
