import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Components/Home';
import Lyrics from '../Components/Lyrics';
import Favorites from '../Components/Favorites';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="Lyrics" component={Lyrics} initialParams={{ref : [0, 0]}}/>
    </Stack.Navigator>
  );
}

export default MyStack;