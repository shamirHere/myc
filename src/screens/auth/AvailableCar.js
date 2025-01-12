import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../../assets/styles'
import colors from '../../assets/colors'
import AvailableCar1 from '../../components/auth/AvailableCar1'

const AvailableCar = () => {
  return (
    <SafeAreaView style={[styles.p16 , {flex : 1}]}>
      <Text style={{color : colors.black}}>AvailableCar</Text>
      <AvailableCar1/>
    </SafeAreaView>
  )
}

export default AvailableCar