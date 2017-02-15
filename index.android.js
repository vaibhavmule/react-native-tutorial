/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    let pic = {
      uri:'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg'
    }
    return (
      <Image source={pic} style={{width: 193, height: 110}} />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
