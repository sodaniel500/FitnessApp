import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoardScreen from './src/screen/OnBoardScreen';
import SignIn from './src/screen/SignIn';
import Plan from './src/screen/Plan';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <SafeAreaView style={{flex : 1}}>
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoardScreen" component={OnBoardScreen} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Plan" component={Plan} />
    </Stack.Navigator>
   </NavigationContainer>
   </SafeAreaView>
  )
}

export default Navigation

const styles = StyleSheet.create({})