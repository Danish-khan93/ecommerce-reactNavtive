import React from 'react';
import {View,Image, StyleSheet} from 'react-native';
const Splesh = () => {
  return (
    <View style={style.container}>
      <Image source={require("../assets/FlyShop.png")}/>
    </View>
  );
};

export default Splesh;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF981F',
  },
});
