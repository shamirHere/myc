import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Fscreen from './src/fscreen.js';
import Welcome from './src/welcome.js';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Fscreen">
          <Stack.Screen name="Fscreen" component={Fscreen} />
          <Stack.Screen name="welcome" component={Welcome} />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
