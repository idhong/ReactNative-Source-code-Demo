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
//引入外部的JS文件
var LoginView = require('./loginView');

export default class QQLoginDemo extends Component {
  render() {
    return (

        <LoginView />

    );
  }
}


AppRegistry.registerComponent('QQLoginDemo', () => QQLoginDemo);
