import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
const OtherLoginAccess = ({name, image,backgroundColor}: {name: string; image: any,backgroundColor:string}) => {
  return (
    <TouchableOpacity style={[style.container,{backgroundColor:backgroundColor}]}>
      <Image source={image} />
      <Text style={style.btnText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default OtherLoginAccess;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    width: 300,
    height: 50,
    borderRadius: 10,
    
  },
  btnText:{
    fontSize:17,
    fontWeight:"600",
    color:"#fff",

  }
});
