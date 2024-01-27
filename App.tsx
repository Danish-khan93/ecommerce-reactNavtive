import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './src/navigation';
const App = () => {
  return (
<AppNavigation/>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
