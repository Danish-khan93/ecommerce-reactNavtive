import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import CustomAuthBtn from '../component/CustomAuthBtn';
import {useForm} from 'react-hook-form';

type LOGINFORM = {
  userName: string;
  password: string;
};

const Login = () => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      userName: '',
      password: '',
    },
  });
  const onSubmit = (data: LOGINFORM) => {
    console.log(data, 'signupdata');
  };
  return (
    <View style={style.container}>
      <View style={style.textContainer1}>
        <Text style={style.headingText}>Wellcome</Text>
        <Text style={style.pText}>Please enter your data to continue</Text>
      </View>
      <View style={style.btnSec}>
        <CustomTextInput
          name="userName"
          placeHolder="Enter User Name"
          label="User Name"
          secureTextEntry={false}
          control={control}
        />

        <CustomTextInput
          name="password"
          control={control}
          placeHolder="Enter Password"
          label="Password"
          secureTextEntry={true}
        />
      <View style={style.textContainer}>
        <Text style={style.pText}>Remember me</Text>
        <Text style={style.LinkText}> Button</Text>
      </View>
      </View>
      
      <View>
        <CustomAuthBtn
          name={'Login'}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textContainer: {
    marginTop:20,
    gap: 130,
    flexDirection: 'row',
  },
  textContainer1: {
    alignItems: 'center',
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
