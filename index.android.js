/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class AwesomeProject extends Component {
  render() {
    return (
    <View>
      <Text style={styles.red}>Vaibhav</Text>
      <Text style={styles.bigblue}>Foo</Text>
      <Text style={[styles.bigblue, styles.red]}>Foo, Bar</Text>
      <Text style={[styles.red, styles.bigblue]}>Faux</Text>
    </View>
    )
  }
}


const styles = StyleSheet.create({
 bigblue: {
  color: 'blue',
  fontWeight: 'bold',
  fontSize: 30,
 },
 red: {
  color:'red',
 }
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
