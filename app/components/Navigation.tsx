import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, ImageItemScreen} from '../screens';

const {Navigator, Screen} = createStackNavigator();

export const Navigation: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
        <Screen
          name="Image"
          component={ImageItemScreen}
          options={{title: 'Image'}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
