/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// Navigations
import RootNavigation from '@navigations/Root'

// Redux
import { Provider } from 'react-redux'
import store from '@redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
