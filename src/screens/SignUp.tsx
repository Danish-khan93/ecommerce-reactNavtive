import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import CustomAuthBtn from '../component/CustomAuthBtn';
const SignUp = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.headingText}>Sign Up</Text>
      </View>
      <View style={style.btnSec}>
        <CustomTextInput
          placeHolder="Enter User Name"
          label="User Name"
          secureTextEntry={false}
        />
        <CustomTextInput
          placeHolder="Enter Email"
          label="Email Address"
          secureTextEntry={false}
        />
        <CustomTextInput
          placeHolder="Enter Password"
          label="Password"
          secureTextEntry={true}
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.pText}>Remember me</Text>
        <Text style={style.LinkText}> Signin</Text>
      </View>
      <View>
        <CustomAuthBtn name={'Sign Up'} />
      </View>
    </View>
  );
};

export default SignUp;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  headingText: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: '500',
    color: '#000',
  },
  pText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#8f959e',
  },
  LinkText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1D1e20',
    marginBottom: 15,
  },
  btnSec: {
    gap: 10,
    flex: 1,
    justifyContent: 'center',
  },
});
