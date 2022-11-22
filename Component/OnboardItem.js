import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const OnboardItem = () => {
    const navigation = useNavigation()
  return (
   
    <View style={styles.footer}>
    <Text style={styles.text}>Lets Achieve Your Desired Body Shape</Text>
    <Text style={styles.texts}>Track your daily activities, burned calories and achieve your Goals</Text>
  
    <TouchableOpacity 
    onPress={() => navigation.navigate('SignIn')}
    style={styles.btn}
    >
    <Text style={{color:'white', fontWeight: 'bold', fontSize: 21}}>Start</Text>
    </TouchableOpacity>

  </View>
  )
}

export default OnboardItem

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "rgba(255,255,255, 0.6)",
        paddingVertical: 16,
        paddingHorizontal: 10,
        borderRadius: 16
      },
    text: {
        color: "gray",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "justify",
      },
      texts: {
        color: "white",
        marginVertical: 10,
        marginBottom: 20,
        fontSize: 15
      },
      btn: {
       alignItems: 'center',
       backgroundColor: 'black',
       marginVertical: 20,
       height: 45,
       justifyContent: 'center',
       borderRadius: 10,
       marginHorizontal: 100
      }
})