import React from 'react';

import { StackNavigator } from 'react-navigation';

import Main from './app/components/Main';
import Dashboard from './app/components/Dashboard';

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
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  }
);

export default Navigation;