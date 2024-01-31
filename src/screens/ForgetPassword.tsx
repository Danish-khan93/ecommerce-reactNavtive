import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import CustomTextInput from '../component/CustomTextInput';
import {useForm} from 'react-hook-form';
import CustomAuthBtn from '../component/CustomAuthBtn';

type FORGOTPASS = {
  email: string;
};

const ForgetPassword = () => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: FORGOTPASS) => {
    console.log(data, 'forgot pass');
  };
  return (
    <View style={style.mainContainer}>
      <View>
        <Text style={style.headingText}>Forget Password</Text>
      </View>
      <View style={style.imageContainer}>
        <Image source={require('../assets/forgotPass.png')} />
      </View>
      <View>
        <CustomTextInput
          name="email"
          control={control}
          placeHolder="Enter Email"
          label="Email Address"
          secureTextEntry={false}
        />
      </View>

      <View style={style.bottomBtn}>
        <View>
          <Text style={style.bottomText}>
            Please write your email to receive a confirmation code to set a new
            password.
          </Text>
        </View>
        <CustomAuthBtn
          name={'Conform Mail'}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </View>
    </View>
  );
};

export default ForgetPassword;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headingText: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: '500',
    color: '#000',
  },
  bottomText: {
    color: '#8f959e',
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 13,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 20,
  },
  bottomBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageContainer: {
    marginBottom: 40,
  },
});
