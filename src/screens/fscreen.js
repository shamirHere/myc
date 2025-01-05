import React, {useState} from 'react';
import {Image, SafeAreaView, TouchableOpacity, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import images from '../assets/images.js';
import icones from '../assets/icon.js';
import Welcome from './welcome.js';

const Fscreen = () => {
  const navigation = useNavigation();
  const [isChanged, setIsChanged] = useState(0);

  const handlePress = () => {
    setIsChanged(isChanged + 1);
  };

  if (isChanged == 0) {
    return (
      <SafeAreaView>
        <Image
          source={images.first_image}
          style={[
            {marginTop: 50, height: 200, width: '100%', resizeMode: 'contain'},
          ]}
        />

        <Text
          style={[
            {marginLeft: 100, fontSize: 30, fontWeight: 'bold', color: 'black'},
          ]}>
          At Anytime
        </Text>
        <Text
          style={[
            {
              textAlign: 'center',
              marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
          ]}>
          easy to book a ride anytime, whether it's immediate or scheduled in
          advance. With real-time tracking and safe, reliable drivers, your ride
          is always just a few taps away. Enjoy hassle-free ride.
        </Text>

        <TouchableOpacity onPress={handlePress}>
          <Image
            source={icones.right}
            style={[
              {
                marginTop: 200,
                marginLeft: 150,
                height: 50,
                width: 50,
                resizeMode: 'contain',
                borderRadius: 500,
              },
            ]}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView>
        <Image
          source={images.second_img}
          style={[
            {marginTop: 50, height: 200, width: '100%', resizeMode: 'contain'},
          ]}
        />
        <Text
          style={[
            {marginLeft: 100, fontSize: 30, fontWeight: 'bold', color: 'black'},
          ]}>
          Book your cab
        </Text>
        <Text
          style={[
            {
              textAlign: 'center',
              marginTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            },
          ]}>
          Travel with confidence and convenience every time you book your cab
          with us. 🚖
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('welcome')}>
          <Image
            source={icones.go}
            style={[
              {
                marginTop: 200,
                marginLeft: 150,
                height: 50,
                width: 50,
                resizeMode: 'contain',
                borderRadius: 500,
              },
            ]}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
};

export default Fscreen;

// import React, { useState } from 'react';
// import { Image, SafeAreaView, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import images from '../assets/image.js';
// import icones from '../assets/icon.js';
// import Welcome from './welcome.js';

// const Fscreen = () => {
//   const navigation = useNavigation();
//   const [isChanged, setIsChanged] = useState(0);

//   const handlePress = () => {
//     setIsChanged(isChanged + 1);
//   };

//   return (
//     <SafeAreaView>
//       <Image
//       source={isChanged === 0 ? images.first_image : images.second_img}
//       style={styles.image}
//     />
//     <Text style={styles.title}>
//       {isChanged === 0 ? 'At Anytime' : 'Book your cab'}
//     </Text>
//     <Text style={styles.description}>
//       {isChanged === 0
//         ? 'easy to book a ride anytime, whether it\'s immediate or scheduled in advance. With real-time tracking and safe, reliable drivers, your ride is always just a few taps away. Enjoy hassle-free ride.'
//         : 'Travel with confidence and convenience every time you book your cab with us. 🚖'}
//     </Text>
//     <TouchableOpacity onPress={handlePress}>
//       <Image
//         source={isChanged === 0 ? icones.right : icones.go}
//         style={styles.icon}
//       />
//     </TouchableOpacity>
//   </SafeAreaView>
// );
// };

// const styles = StyleSheet.create({
// image: {
//   marginTop: 50,
//   height: 200,
//   width: '100%',
//   resizeMode: 'contain',
// },
// title: {
//   marginLeft: 100,
//   fontSize: 30,
//   fontWeight: 'bold',
//   color: 'black',
// },
// description: {
//   textAlign: 'center',
//   marginTop: 20,
//   paddingLeft: 20,
//   paddingRight: 20,
// },
// icon: {
//   marginTop: 200,
//   marginLeft: 150,
//   height: 50,
//   width: 50,
//   resizeMode: 'contain',
//   borderRadius: 500,
// },
// });

// export default Fscreen;
