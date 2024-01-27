import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {style} from './style.ts';

const AuthBottom = () => {
  return (
    <View style={style.container}>
      <View style={style.secContainer}>
        <View style={style.line}></View>
        <View>
          <Text style={style.text}>Or connect with</Text>
        </View>
      </View>
      <View style={style.image}>
        <View>
          <Image source={require('../../assets/item1.png')} />
        </View>
      </View>
    </View>
  );
};

export default AuthBottom;
