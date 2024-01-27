import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import AuthBottom from '../component/authBottom/AuthBottom';

const SignUpandLogin = ({navigation}: {navigation: any}) => {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          style={style.image}
          source={require('../assets/hamburger.png')}
        />
      </View>
      <View style={style.btnContainer}>
        <TouchableOpacity
          style={style.signinBtn}
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={style.signText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.loginBtn}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={style.loginText}>Sign Up </Text>
        </TouchableOpacity>
      </View>

      <AuthBottom />
    </View>
  );
};

export default SignUpandLogin;

const style = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginTop: 60,
  },
  btnContainer: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    height: 250,
    width: 250,
  },
  signinBtn: {
    alignItems: 'center',
    width: 300,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#D35400',
  },
  signText: {
    color: '#fff',
    fontWeight: '500',
  },
  loginBtn: {
    alignItems: 'center',
    width: 300,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#ECF0F1',
  },
  loginText: {
    color: '#000',
    fontWeight: '500',
  },
});
