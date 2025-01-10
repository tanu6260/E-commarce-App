import { } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/bottom';
import store from './redux/store';






const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;