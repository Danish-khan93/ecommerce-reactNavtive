import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import AuthBottom from '../component/authBottom/AuthBottom';
const Signup = () => {
  return (
    <View style={style.container}>
      <View style={style.secContainer}>
        <Text style={style.text}>Sign In</Text>
      </View>
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Username"
          placeholderTextColor="#000"
          onChangeText={text => {
            console.log(text);
          }}
        />
        <TextInput
          style={style.input}
          placeholder="Password"
          placeholderTextColor="#000"
          onChangeText={text => {
            console.log(text);
          }}
        />
        <TouchableOpacity
          style={style.Btn}
          onPress={() => {
            console.log('sign in ');
          }}>
          <Text style={style.btnText}> SignIn </Text>
        </TouchableOpacity>
      </View>
      <View style={style.comp}>
        <AuthBottom />
      </View>
    </View>
  );
};

export default Signup;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',

    gap: 20,
  },
  secContainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  text: {
    color: '#000',
    fontWeight: '700',
    fontSize: 30,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#ECF0F1',
    borderRadius: 40,
    color: '#000',
    width: '90%',
    padding: 10,
    height: 40,
  },
  inputContainer: {
    alignItems: 'center',
    gap: 20,
  },
  Btn: {
    alignItems: 'center',
    width: 300,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#D35400',
  },
  btnText: {
    color: '#fff',
    fontWeight: '500',
  },
  comp: {
    marginTop:50,
    justifyContent:"flex-end",
    height:20,
    
  },
});
