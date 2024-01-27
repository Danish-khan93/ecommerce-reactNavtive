import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import OtherLoginAccess from '../component/OtherLoginAccess';
import CustomAuthBtn from '../component/CustomAuthBtn';
const GetStarted = () => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.headingText}>Lets Get Started </Text>
      </View>
      <View style={style.btnSec}>
        <OtherLoginAccess
          backgroundColor="#4267B2"
          name="Facebook"
          image={require('../assets/Facebook.png')}
        />
        <OtherLoginAccess
          backgroundColor="#1DA1F2"
          name="Twitter"
          image={require('../assets/Twitter.png')}
        />
        <OtherLoginAccess
          backgroundColor="#EA4335"
          name="Google"
          image={require('../assets/Google.png')}
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.pText}>Already have an account?</Text>
        <Text style={style.LinkText}> Signin</Text>
      </View>
      <View>
            <CustomAuthBtn name={"Create an Account"}/>    
      </View>
    </View>
  );
};

export default GetStarted;

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
    marginBottom:15,
  },
  btnSec: {
    gap: 10,
    flex: 1,
    justifyContent: 'center',
  },
});
