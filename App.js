/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Navigator from './src/Navigaton/Navigator';

import Home from './src/Components/Home';

const App = () => {
  return <Navigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
