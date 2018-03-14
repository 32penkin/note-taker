import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Dashboard extends Component {

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        <Text>This is a Dashboard component</Text>
        <Text>{params.userInfo.login}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});