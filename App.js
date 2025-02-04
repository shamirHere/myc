/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { VerifyOtp, Name , MobileNumber} from './src/screens/auth'
import { Home } from './src/screens/home'
const App = () => {
  const Stack = createNativeStackNavigator(); 
  return (   
    <NavigationContainer>            
      <Stack.Navigator initialRouteName='CreatingAccount' screenOptions={{headerShown: false}}>
        <Stack.Screen name='MobileNumber' component={MobileNumber}/>
        <Stack.Screen name='VerifyOtp' component={VerifyOtp}/>
        <Stack.Screen name='Name' component={Name}/>  
        <Stack.Screen name='Home' component={Home}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 