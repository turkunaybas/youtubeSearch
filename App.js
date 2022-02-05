import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';

const Stack = createNativeStackNavigator()

function App() {
  return (

    //ekranları burada navigationa koyduk ekranlar arası geçiş yapabilmek için
    <NavigationContainer >
      
      <Stack.Navigator headerMode="none"   screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="video" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;