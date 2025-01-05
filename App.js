import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Fscreen from './src/screens/fscreen.js';
import Welcome from './src/screens/welcome.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Fscreen" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Fscreen" component={Fscreen} />
          <Stack.Screen name="welcome" component={Welcome} />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
