import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Splesh,GetStarted , SignUp, Login} from './src/screens/index.ts';

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Splesh /> */}
      {/* <GetStarted/> */}
      {/* <SignUp/> */}
      <Login/>
    </View>
  );
};

export default App;

