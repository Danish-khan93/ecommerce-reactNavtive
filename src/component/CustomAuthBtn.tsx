import React from 'react';
import {TouchableOpacity, Text, StyleSheet,Dimensions} from 'react-native';

const width = Dimensions.get("window").width

const CustomAuthBtn = ({name}: {name: string}) => {
  return (
    <TouchableOpacity style={style.btn}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default CustomAuthBtn;

const style = StyleSheet.create({
  btn: {
    backgroundColor: '#FF981F',
    width:width,
    height: 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#fff',
  },
});
