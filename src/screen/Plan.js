import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Plan = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>

        <TouchableOpacity style={{ alignSelf: 'flex-start', }}
          onPress={() => navigation.navigate('SignIn')}
        >
          <AntDesign name="left" size={15} color="black" />
        </TouchableOpacity>

        <View style={{ alignSelf: 'center', bottom: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}
          >Select Your Plan</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row',  justifyContent: 'space-between'}}>
        <View style={styles.btn}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', paddingVertical: 35, }}
          >Weekly</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>$840</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Meal per day $120</Text>
        </View>

        <View style={{...styles.btn, backgroundColor: '#FFC0CB',}}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', paddingVertical: 35, }}
          >Monthly</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>$3360</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Meal per day $524</Text>
        </View>
      </View>

      <View style={{marginTop: 30}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Start data</Text>
      </View>

      <View style={styles.bttn}>
       <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>Jan 24,2020</Text>
       <TouchableOpacity>
       <Text style={{color: 'orange', fontSize: 13, fontWeight: 'bold'}}>Change Data</Text>
       </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Select Diet</Text>
        <TouchableOpacity>
        <Text style={{color: 'gray',fontWeight: 'bold'}}>See All</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.img}>Paleo Diet</Text>
      </View>

    </SafeAreaView>
  )
}

export default Plan

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  back: {
    marginTop: 15,
  },
  btn: {
    backgroundColor: '#DDA0DD',
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingBottom: 19,
    width: '45%',
    paddingRight: 10
  },
  bttn: {
    backgroundColor: '#180C25',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 13,
    paddingVertical: 20,
    borderRadius: 15,
    marginTop: 10
  }
})