import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from './src/screens/auth'

const App = () => {
  const Stack = createNativeStackNavigator(); 
  return (
    <NavigationContainer>            
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={Welcome}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App; 
