import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect } from 'react';

const Plan = ({ navigation }) => {

  // const [selectBtn, setSelectBtn] = useState("")
  const [changeColor, setChangeColor] = useState(false)
  const [button, setButton] = useState(true)
  const [tabView, setTabView] = useState("tab1")

  const Change = () => {
    setChangeColor(!changeColor)
  }

  const bts = () => {
    setButton(!button)
  }

  const changeTab = (value) => {
    setTabView(value)
  }

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

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ ...styles.btn, backgroundColor: changeColor ? '#DDA0DD' : '#FFC0CB' }} onPress={() => { Change() }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', paddingVertical: 35, }}
          >Weekly</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>$840</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Meal per day $120</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.btn, backgroundColor: !changeColor ? '#DDA0DD' : '#FFC0CB', }} onPress={() => { Change() }}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', paddingVertical: 35, }}
          >Monthly</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>$3360</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 10 }}>Meal per day $524</Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Start data</Text>
      </View>

      <View style={styles.bttn}>
        <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Jan 24,2020</Text>
        <TouchableOpacity>
          <Text style={{ color: 'orange', fontSize: 13, fontWeight: 'bold' }}>Change Data</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Select Diet</Text>
        {/* <TouchableOpacity onPress={() => {changeTab("tab1")}}> */}
        <Text style={{ color: 'gray', fontWeight: 'bold' }}>See All</Text>
        {/* </TouchableOpacity>
        <TouchableOpacity onPress={() => {changeTab("tab2")}}>
          <Text style={{ color: 'gray', fontWeight: 'bold' }}>See All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {changeTab("tab3")}}>
          <Text style={{ color: 'gray', fontWeight: 'bold' }}>See All</Text>
        </TouchableOpacity> */}
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <TouchableOpacity style={{ ...styles.img, backgroundColor: tabView === "tab1" ? '#DDA0DD' : 'white',
        borderWidth: tabView === "tab1"  ? null : 1 }}
          onPress={() => {
            changeTab("tab1")
            bts()
          }}>
          <Text style={{ alignSelf: 'center' }}>Paleo Diet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.imgg, backgroundColor: tabView === "tab2"  ? '#DDA0DD' : 'white', 
        borderWidth: tabView === "tab2"  ? null : 1 }}
          onPress={() => {
            changeTab("tab2")
            bts()
          }}>
          <Text style={{ alignSelf: 'center' }}>Vegan Diet</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.imggg, backgroundColor: tabView === "tab3"  ? '#DDA0DD' : 'white',
         borderWidth: tabView === "tab3"  ? null : 1 }}
          onPress={() => {
            changeTab("tab3")
            bts()
          }}>
          <Text style={{ alignSelf: 'center' }}>Regular Diet</Text>
        </TouchableOpacity>

      </View>

      {tabView === "tab1" ? (<>
        <View>
          <Image
            source={require('../../assets/5.jpg')}
            style={styles.tab}
          />
        </View>
      </>) : tabView === "tab2" ? (
        <>
          <View>
            <Image
              source={require('../../assets/6.jpg')}
              style={styles.tab}
            />
          </View>
        </>
      ) : tabView === "tab3" ? (
        <>
          <View>
            <Image
              source={require('../../assets/4.jpg')}
              style={styles.tab} />
          </View>
        </>
      ) : null
      }

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
  },
  img: {
    borderWidth: 1,
    justifyContent: 'center',
    height: 35,
    width: 75,
    borderRadius: 10,
  },
  imgg: {
    borderWidth: 1,
    justifyContent: 'center',
    height: 35,
    width: 75,
    borderRadius: 10,
  },
  imggg: {
    borderWidth: 1,
    justifyContent: 'center',
    height: 35,
    width: 75,
    borderRadius: 10,
  },
  tab: {
    padding: 10,
    height: 150,
    width: 300,
    borderRadius: 10,
    marginTop: 25,
    resizeMode: 'contain',
  }
})