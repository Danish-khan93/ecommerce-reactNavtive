import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const CustomTextInput = ({
  placeHolder,
  label,
  secureTextEntry,
}: {
  placeHolder: string;
  label: string;
  secureTextEntry: boolean;
}) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholderTextColor="#000"
        placeholder={placeHolder}
        style={style.input}
      />
    </View>
  );
};

export default CustomTextInput;

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  input: {
    width: width - 40,
    borderBottomWidth: 1,
    height: 40,
    color: '#000',
  },
  label: {
    width: width - 40,
    // justifyContent: 'flex-end',
    color: '#8F959E',
    fontSize: 13,
    fontWeight: '400',
  },
});
