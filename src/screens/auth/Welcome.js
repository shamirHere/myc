import React, {useState} from 'react';
import {Image, SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/images.js';
import icons from '../../assets/icons.js';
import { Button  , InputText, Otp} from '../../components/shared/index.js';
import styles from '../../assets/styles/index.js';

const Welcome = () => {
  const navigation = useNavigation();
  const [isChanged, setIsChanged] = useState(0);

  const handlePress = () => {
    setIsChanged(isChanged + 1);
  };

  return (
    <SafeAreaView style={[styles.pdh16]}>
    <Button label={"Continue"} />
    <InputText placeholder={"Enter your name"} secureTextEntry={true} />
    <Otp />
  </SafeAreaView>
);
};
export default Welcome;
