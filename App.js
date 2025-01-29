/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome , CreatingAccount,SignIn, NewPass,VerifyOtp,Profile} from './src/screens/auth'
import { SafeAreaView } from 'react-native'




const App = () => {
  const Stack = createNativeStackNavigator(); 
  return (
    // <SafeAreaView>
    //   {/* <CreatingAccount/> */}
    //   {/* <SignIn/> */}

    //   {/* <VerifyOtp /> */}
    //   <Profile/>
    // </SafeAreaView>
   
    <NavigationContainer>            
      <Stack.Navigator initialRouteName='CreatingAccount' screenOptions={{headerShown: false}}>
        <Stack.Screen name='CreatingAccount' component={CreatingAccount}/>
        <Stack.Screen name='Profile' component={Profile}/>
        <Stack.Screen name='SignIn' component={SignIn}/>
        <Stack.Screen name='VerifyOtp' component={VerifyOtp}/>
        <Stack.Screen name='NewPass' component={NewPass}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App; 
