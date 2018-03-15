import React from 'react';

import { StackNavigator } from 'react-navigation';

import Main from './app/components/Main';
import Dashboard from './app/components/Dashboard';
import Profile from './app/components/Profile'

const Navigation = StackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({navigation}) => ({
        title: 'Github Notetaker',
      }),
    },
    Dashboard: {
      screen: Dashboard,
    },
    Profile: {
      screen: Profile,
    },
  }
);

export default Navigation;