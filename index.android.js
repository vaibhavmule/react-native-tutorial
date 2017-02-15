/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';


class Greeting extends Component {
  render() {
    return (
    <Text>Hello, {this.props.name}</Text>
  )
  }
}

export default class AwesomeProject extends Component {
  render() {
    return (
    <View style={{alignItems: 'center'}}>
      <Greeting name='Vaibhav' />
      <Greeting name='Foo' />
      <Greeting name='Bar' />
    </View>
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
