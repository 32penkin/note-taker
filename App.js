import React from 'react';

import { StackNavigator } from 'react-navigation';

import Main from './app/components/Main';

const Navigation = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: 'Github Notetaker',
    }),
  },
});

export default Navigation;