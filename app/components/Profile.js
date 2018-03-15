import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

import Badge from './Badge';

export default class Profile extends Component {

  constructor(props) {
    super(props);
  }

  getRowTitle(item) {
    const itemNew = (item === 'public_repos') ? item.replace('_', ' ') : item;
    return itemNew[0] ? itemNew[0].toUpperCase() + itemNew.slice(1) : itemNew;
  }

  render() {
    const { params } = this.props.navigation.state;
    const topicArr = ['location', 'followers', 'following', 'email',
      'bio', 'public_repos'];
    const list = topicArr.map((item, index) => {
      if (!params.userInfo[item]) {
        return <View key={index} />
      } else {
        return (
          <View key={index} style={styles.rowContainer}>
            <Text style={styles.rowTitle}> {this.getRowTitle(item)} </Text>
            <Text style={styles.rowContent}> {params.userInfo[item]} </Text>
          </View>
        )
      }
    });

    return (
      <ScrollView style={styles.container}>
        <Badge userInfo={params.userInfo} />
        {list}
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});