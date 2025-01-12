import {View, Text, Image} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import images from '../../assets/images';
import styles from '../../assets/styles';
import {Button} from '../shared';

const AvailableCar1 = () => {
  return (
    <View style={{borderWidth: 1, borderColor: '#58BE3F', height: '20%'}}>
      <View style={{borderWidth: 1, height: '60%', flexDirection: 'row'}}>
        <View style={{borderWidth: 1, width: '60%'}}>
          <Text style={{color: colors.black}}>BMW Cabrio</Text>
          <Text style={{color: colors.black}}>
            Automatic | 3 Seater | Obtained
          </Text>
          <Text style={{color: colors.black}}>800 m (5 min away)</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '40%',
          }}>
          <Image
            style={[{height: 80, width: 80, resizeMode: 'contain'}]}
            source={images.imgbmw}
          />
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button buttonStyle={{width: '48%'}} label={'Book Later'} />
        <Button
          buttonStyle={{width: '48%'}}
          label={'Ride Now'}
          isOutline={true}
          borderWidth={1}
        />
      </View>
    </View>
  );
};

export default AvailableCar1;
