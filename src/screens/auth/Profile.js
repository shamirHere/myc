import react from 'react';
import {SafeAreaView, Text, TouchableOpacity,View,Image} from 'react-native';
import {TitleInput, Button} from '../../components/shared';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';

const Profile = () => {
  return (
    <SafeAreaView style={[styles.p16]}>
      <View style={[{alignItems: 'center'}]}>
        <Text style={[styles.h1,styles.m12]}>Complete your Profile</Text>
        <Text style={[{color: colors.black400,textAlign:'center'}, styles.ts14 ,styles.ml36,styles.mr36,styles.mb12 ]}>
          Don't worry ,only you can see your personal data. No one else will be
          able to see it.
        </Text>
      </View>
      <TouchableOpacity style={[styles.mt12,styles.mb12,{alignItems:'center'}]}>
        <Image source={icons.profile_pic} style={[styles.icon100,{borderRadius:30}]} />
      </TouchableOpacity>
      <TitleInput title="Name" placeholder="Name" />
      <TitleInput title="Phone Number" placeholder="Enter Phone Number" />
      <Button label="Complete Profile" />

    </SafeAreaView>
  );
};

export default Profile;
