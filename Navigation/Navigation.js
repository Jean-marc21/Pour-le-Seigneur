// ../Navigation/Navigation.js
// Gestion de la navigation

import React from 'react';
import MyDrawer from './DrawerNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

const App = function () {
    return (
      <NavigationContainer>
        <NativeBaseProvider>
          <MyDrawer />
        </NativeBaseProvider>
      </NavigationContainer>
    );
  }
export default App;