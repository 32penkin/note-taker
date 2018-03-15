import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import PropTypes from 'prop-types';

export default class Badge extends Component {

  render() {
    const userAvatarUri = this.props.userInfo.avatar_url;

    return (
      <View style={styles.container}>
        <Image
          source={{uri: userAvatarUri}}
          style={styles.image}
        />
        <Text style={styles.name}>{this.props.userInfo.name}</Text>
        <Text style={styles.handle}>{this.props.userInfo.login}</Text>
      </View>
    );
  }

}

Badge.propTypes = {
  userInfo: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#48BBEC',
    paddingBottom: 10
  },
  name: {
    alignSelf: 'center',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 5,
    color: 'white'
  },
  handle: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white'
  },
  image: {
    height: 125,
    width: 125,
    borderRadius: 65,
    marginTop: 10,
    alignSelf: 'center'
  }
});