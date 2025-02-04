import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/images.js';
import icons from '../../assets/icons.js';
import {
  Button,
  InputText,
  Otp,
  TitleHeader,
  TitleInput,
} from '../../components/shared/index.js';
import styles from '../../assets/styles/index.js';
import colors from '../../assets/colors/index.js';

const Welcome = () => {
  const navigation = useNavigation();
  const [isChanged, setIsChanged] = useState(0);

  const handlePress = () => {
    setIsChanged(isChanged + 1);
  };

  return (
    <SafeAreaView style={[styles.p16, {flex: 1}]}>
      <TitleHeader />
      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1, styles.ts25, styles.mb12]}>Welcome</Text>
        <Text style={[{color: colors.black400}, styles.ts15]}>
          Please introduce yourself
        </Text>
      </View>

      <TitleInput placeholder={'Enter your name'} />
      <Button
        label={'Next'}
        style={[styles.mt36]}
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};
export default Welcome;
