import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardScreen from './src/screen/OnBoardScreen';
import DetailsScreen from './src/screen/DetailsScreen';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})