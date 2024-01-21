import React from 'react';
import {Image, View, Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 1,
    title: 'Delicious Food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: require('../../assets/chicken-leg1.png'),
    backgroundColor: '#D35400',
  },
  {
    key: 2,
    title: 'Fast Shipping',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum rhoncus nulla.',
    image: require('../../assets/shipped1.png'),
    backgroundColor: '#D35400',
  },
  {
    key: 3,
    title: 'Certificate Food',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum rhoncus nulla.',
    image: require('../../assets/medal1.png'),
    backgroundColor: '#D35400',
  },
  {
    key: 4,
    title: 'Payment Online',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum rhoncus nulla.',
    image: require('../../assets/credit-card1.png'),
    backgroundColor: '#D35400',
  },
];

const index = () => {
  return (
    <View style={{flex: 1}}>
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'red',
              }}>
              <Image
                source={item.image}
                style={{width: '80%', height: 400, objectFit: 'contain'}}
              />
              <Text style={{color: 'black', fontSize: 34, fontWeight: 600}}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 400,
                }}>
                {item.text}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default index;
