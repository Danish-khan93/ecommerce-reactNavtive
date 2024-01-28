import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {Controller} from 'react-hook-form';
const width = Dimensions.get('window').width;
const CustomTextInput = ({
  placeHolder,
  label,
  secureTextEntry,
  control,
  name,
}: {
    placeHolder: string;
    label: string;
    secureTextEntry: boolean;
    control: any;
    name:string,
}) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <Controller
      name={name}
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#000"
            placeholder={placeHolder}
            style={style.input}
            onChangeText={onChange}
            value={value}
          />
        )}
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
