import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {
  TitleInput,
  OTPInput,
  Button,
} from '../../components/shared';

const VerifyOtp = ({navigation, route}) => {
  return (
    <SafeAreaView style={[styles.p16]}>
      <View style={[{alignItems: 'center'}, styles.mt20]}>
        <Text style={[styles.h1, styles.mb12]}>Verify Code</Text>
        <Text style={[{color: colors.black400}, styles.ts14]}>
          Please enter the code we just to your mobile number
        </Text>
        <Text style={[{color: colors.primary}, styles.ts15]}>
          9477172214
        </Text>
      </View>
      <OTPInput OTPInputStyle={[styles.mt36]} />
      <Text
        style={[
          {color: colors.black400, textAlign: 'center'},
          styles.ts14,
          styles.mt40,
        ]}>
        Didn't receive OTP
      </Text>
      <Text
        style={[
          {
            color: colors.black,
            textAlign: 'center',
            textDecorationLine: 'underline',
          },
          styles.fwBold,
          styles.ts14,
          styles.mt8,
        ]}>
        Resend Code
      </Text>
      <Button label={'Verify'} style={[styles.mt24]} onPress={() => navigation.navigate("Name")}/>
    </SafeAreaView>
  );
};

export default VerifyOtp;


