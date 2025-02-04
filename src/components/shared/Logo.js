import react from 'react';
import { Image, SafeAreaView ,Text ,TouchableOpacity } from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const Logo =({image})=>{
    return(
        <TouchableOpacity
          style={[
            styles.mt24,
            {
              alignSelf: 'center',
              borderWidth: 0.5,
              borderRadius: 50,
              borderColor: colors.grey200,
            },
            styles.p12,
          ]}>
          <Image source={icons.google} style={[styles.icon36]} />
        </TouchableOpacity>
      
    )
}

export default Logo;